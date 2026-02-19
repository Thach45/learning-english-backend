/**
 * Seed: gán Permission vào Role theo quy tắc phân quyền.
 * - ADMIN: toàn bộ permission.
 * - MODERATOR: tất cả trừ quản lý permission (path "permissions").
 * - USER: chỉ route dùng cho user thường (auth, categories, study-sets, vocabulary, learning, gamification, achievements/me|check, translate, quiz, community).
 *
 * Chạy sau seed:permissions. Chạy: npm run seed:role-permissions
 */
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

type PermissionRow = { id: string; path: string | null; method: string | null };

function isForAdmin(_p: PermissionRow): boolean {
  return true;
}

function isForModerator(p: PermissionRow): boolean {
  const path = (p.path ?? "").trim();
  return !path.startsWith("permissions");
}

function isForUser(p: PermissionRow): boolean {
  const path = (p.path ?? "").trim();
  const method = (p.method ?? "").toUpperCase();

  if (path.startsWith("dashboard") || path.startsWith("permissions") || path.startsWith("roles")) {
    return false;
  }
  if (path.startsWith("auth")) return true;
  if (path.startsWith("categories")) return true;
  if (path.startsWith("study-sets")) return true;
  if (path.startsWith("vocabulary")) return true;
  if (path.startsWith("learning")) return true;
  if (path.startsWith("gamification")) return true;
  if (path.startsWith("translate")) return true;
  if (path.startsWith("quiz")) return true;
  if (path.startsWith("community")) return true;

  if (path.startsWith("achievements")) {
    if (path.startsWith("achievements/admin")) return false;
    if (path === "achievements/me" || path.startsWith("achievements/me/")) return true;
    if (path === "achievements/check" && method === "POST") return true;
    return false;
  }

  return false;
}

const RULES: Record<string, (p: PermissionRow) => boolean> = {
  ADMIN: isForAdmin,
  MODERATOR: isForModerator,
  USER: isForUser,
};

async function run() {
  await prisma.$connect();

  const roles = await prisma.role.findMany({
    where: { isActive: true },
    select: { id: true, name: true },
  });
  const permissions = await prisma.permission.findMany({
    where: { isActive: true },
    select: { id: true, path: true, method: true },
  });

  if (roles.length === 0) {
    console.log("No roles found. Run role seed first (e.g. create ADMIN, MODERATOR, USER).");
    await prisma.$disconnect();
    return;
  }
  if (permissions.length === 0) {
    console.log("No permissions found. Run npm run seed:permissions first.");
    await prisma.$disconnect();
    return;
  }

  for (const role of roles) {
    const roleName = role.name as string;
    const predicate = RULES[roleName];
    if (!predicate) {
      console.log(`  [${roleName}] No rule, skip.`);
      continue;
    }

    const allowed = permissions.filter(predicate);
    const existing = await prisma.rolePermission.findMany({
      where: { roleId: role.id },
      select: { permissionId: true },
    });
    const existingIds = new Set(existing.map((e) => e.permissionId));
    const toAdd = allowed.filter((p) => !existingIds.has(p.id));
    const toRemove = existing.filter((e) => !allowed.some((a) => a.id === e.permissionId));

    if (toRemove.length > 0) {
      await prisma.rolePermission.deleteMany({
        where: {
          roleId: role.id,
          permissionId: { in: toRemove.map((r) => r.permissionId) },
        },
      });
    }
    if (toAdd.length > 0) {
      const data: { roleId: string; permissionId: string }[] = toAdd.map((p) => ({
        roleId: role.id,
        permissionId: p.id,
      }));
      await prisma.rolePermission.createMany({ data });
    }

    console.log(
      `  [${roleName}] ${allowed.length} permission(s) (+${toAdd.length} -${toRemove.length})`
    );
  }

  await prisma.$disconnect();
  console.log("\nDone. Role–Permission synced.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
