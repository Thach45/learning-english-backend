import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { PrismaService } from "src/shared/service/prisma.service";
import { ROLES_KEY } from "../decorator/roles.decorator";
import { EUserRole } from "generated/prisma";

/**
 * Chuẩn hóa path: bỏ slash đầu/cuối, bỏ query string.
 * VD: "/community/feed?page=1" -> "community/feed"
 */
function normalizePath(raw: string): string {
  const withoutQuery = (raw || "").split("?")[0].trim();
  return withoutQuery.replace(/^\//, "").replace(/\/$/, "");
}

/**
 * Kiểm tra path thực tế user truy cập có khớp pattern trong DB không.
 * Pattern dùng :param (vd: "learn/vocabulary/:id") khớp mọi segment tại vị trí đó.
 */
function pathMatches(pattern: string, actualPath: string): boolean {
  const normalizedPattern = normalizePath(pattern);
  const normalizedActual = normalizePath(actualPath);
  const regexStr = normalizedPattern
    .split("/")
    .map((seg) => (seg.startsWith(":") ? "[^/]+" : seg.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
    .join("/");
  const regex = new RegExp(`^${regexStr}$`);
  return regex.test(normalizedActual);
}

/**
 * Guard authorization theo DBAC (path + method lưu trong Permission):
 * - Đọc metadata role (decorator @Roles(...)).
 * - Kiểm tra user có ít nhất một role trong metadata.
 * - Lấy tất cả permission (path, method) của user từ DB.
 * - So sánh path + method hiện tại với danh sách permission: khớp thì cho qua, không thì 403.
 *
 * Request phải đã qua AuthenticationGuard (có request.user.userId).
 */
@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<EUserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userId = request.user?.userId;
    if (!userId) {
      throw new ForbiddenException("Bạn cần đăng nhập");
    }

    const userRoles = await this.prisma.userRole.findMany({
      where: { userId },
      include: { role: { select: { name: true } } },
    });
    if (userRoles.some((ur) => ur.role.name === EUserRole.ADMIN)) {
      return true;
    }
    const userRoleNames = userRoles.map((ur) => ur.role.name);
    const hasRequiredRole = requiredRoles.some((r) => userRoleNames.includes(r));
    if (!hasRequiredRole) {
      throw new ForbiddenException("Bạn không có role truy cập");
    }

    const userPermissions = await this.getPathPermissionsByRoleIds(
      userRoles.map((ur) => ur.roleId),
    );
    const currentPath = normalizePath(
      request.route?.path ?? request.path ?? request.url ?? "",
    );
    const currentMethod = (request.method || "GET").toUpperCase();

    const hasPermission = userPermissions.some(
      (p) =>
        pathMatches(p.path, currentPath) &&
        (p.method == null || p.method === "" || p.method.toUpperCase() === currentMethod),
    );

    if (!hasPermission) {
      throw new ForbiddenException(
        `Bạn không có quyền truy cập ${currentMethod} ${currentPath}`,
      );
    }

    return true;
  }

  private async getPathPermissionsByRoleIds(
    roleIds: string[],
  ): Promise<{ path: string; method: string | null }[]> {
    if (roleIds.length === 0) return [];

    const rolePermissions = await this.prisma.rolePermission.findMany({
      where: { roleId: { in: roleIds } },
      include: {
        permission: {
          select: { path: true, method: true, isActive: true },
        },
      },
    });

    const list: { path: string; method: string | null }[] = [];
    for (const rp of rolePermissions) {
      if (rp.permission?.isActive && rp.permission?.path) {
        list.push({
          path: rp.permission.path,
          method: rp.permission.method,
        });
      }
    }
    return list;
  }
}
