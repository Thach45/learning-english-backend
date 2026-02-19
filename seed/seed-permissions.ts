/**
 * Seed script: tự động thu thập toàn bộ endpoint từ NestJS (reflect metadata)
 * và tạo bản ghi Permission trong DB. Chạy: npm run seed:permissions
 */
import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { DiscoveryService } from "@nestjs/core";
import { PATH_METADATA, METHOD_METADATA } from "@nestjs/common/constants";
import { RequestMethod } from "@nestjs/common/enums/request-method.enum";
import { AppModule } from "../src/app.module";
import { PrismaClient } from "../generated/prisma";

const HTTP_METHOD_NAMES: Record<number, string> = {
  [RequestMethod.GET]: "GET",
  [RequestMethod.POST]: "POST",
  [RequestMethod.PUT]: "PUT",
  [RequestMethod.DELETE]: "DELETE",
  [RequestMethod.PATCH]: "PATCH",
  [RequestMethod.ALL]: "ALL",
  [RequestMethod.OPTIONS]: "OPTIONS",
  [RequestMethod.HEAD]: "HEAD",
};

function normalizePath(controllerPath: string, methodPath: string): string {
  const raw = [controllerPath, methodPath]
    .filter(Boolean)
    .join("/")
    .replace(/\/+/g, "/");
  return raw.replace(/^\//, "").replace(/\/$/, "") || "";
}

async function discoverRoutes(discovery: DiscoveryService): Promise<{ path: string; method: string }[]> {
  const routes: { path: string; method: string }[] = [];
  const controllers = discovery.getControllers();

  for (const wrapper of controllers) {
    const metatype = wrapper.metatype;
    if (!metatype || !metatype.prototype) continue;

    const controllerPath = (Reflect.getMetadata(PATH_METADATA, metatype) as string) ?? "";
    const proto = metatype.prototype;

    for (const key of Object.getOwnPropertyNames(proto)) {
      if (key === "constructor") continue;
      const fn = proto[key];
      if (typeof fn !== "function") continue;

      const methodNum = Reflect.getMetadata(METHOD_METADATA, fn) as number | undefined;
      if (methodNum === undefined) continue;

      const methodName = HTTP_METHOD_NAMES[methodNum];
      if (!methodName) continue;

      const methodPath = (Reflect.getMetadata(PATH_METADATA, fn) as string) ?? "/";
      const pathSeg = methodPath === "/" ? "" : methodPath.replace(/^\//, "");
      const fullPath = normalizePath(controllerPath, pathSeg);
      if (!fullPath) continue;

      routes.push({ path: fullPath, method: methodName });
    }
  }

  return routes;
}

async function run() {
  const app = await NestFactory.create(AppModule, { logger: false });
  const discovery = app.get(DiscoveryService);
  const routes = await discoverRoutes(discovery);
  await app.close();

  const prisma = new PrismaClient();
  await prisma.$connect();

  console.log(`Found ${routes.length} route(s). Syncing to Permission...\n`);

  for (const { path, method } of routes) {
    const name = `${method} /${path}`;
    await prisma.permission.upsert({
      where: { name },
      create: { name, path, method, isActive: true },
      update: { path, method },
    });
    console.log(`  ${name}`);
  }

  await prisma.$disconnect();
  console.log(`\nDone. Synced ${routes.length} permission(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
