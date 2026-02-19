import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/service/prisma.service";
import { UpdatePermissionDto } from "./permission.dto";

/**
 * PermissionRepository
 * --------------------
 * Chỉ truy cập DB (Prisma) cho module Permission. Service gọi repo, không gọi Prisma trực tiếp.
 */

export interface FindManyPermissionParams {
  isActive?: boolean;
  search?: string;
  path?: string;
  method?: string;
}

@Injectable()
export class PermissionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    name: string;
    path?: string;
    method?: string;
    isActive?: boolean;
  }) {
    return this.prisma.permission.create({
      data: {
        name: data.name,
        path: data.path,
        method: data.method,
        isActive: data.isActive ?? true,
      },
    });
  }

  async findMany(params?: FindManyPermissionParams) {
    const where: any = {};
    if (typeof params?.isActive === "boolean") where.isActive = params.isActive;
    if (params?.path) where.path = { contains: params.path };
    if (params?.method) where.method = params.method;
    if (params?.search?.trim()) {
      where.OR = [
        { name: { contains: params.search.trim() } },
        { path: { contains: params.search.trim() } },
      ];
    }

    return this.prisma.permission.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
  }

  async findUniqueById(id: string) {
    return this.prisma.permission.findUnique({
      where: { id },
    });
  }

  async findUniqueByName(name: string) {
    return this.prisma.permission.findUnique({
      where: { name },
    });
  }

  async update(id: string, dto: UpdatePermissionDto) {
    return this.prisma.permission.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.path !== undefined && { path: dto.path }),
        ...(dto.method !== undefined && { method: dto.method }),
        ...(typeof dto.isActive === "boolean" && { isActive: dto.isActive }),
      },
    });
  }

  async setActive(id: string, isActive: boolean) {
    return this.prisma.permission.update({
      where: { id },
      data: { isActive },
    });
  }

  async hardDelete(id: string) {
    return this.prisma.permission.delete({
      where: { id },
    });
  }

  async countRolePermissionsByPermissionId(permissionId: string) {
    return this.prisma.rolePermission.count({
      where: { permissionId },
    });
  }

  async getPermissionsByRole(roleId: string) {
    const rows = await this.prisma.rolePermission.findMany({
      where: { roleId },
      include: { permission: true },
    });
    return rows.map((rp) => rp.permission);
  }

  async getUserRoleIds(userId: string): Promise<string[]> {
    const rows = await this.prisma.userRole.findMany({
      where: { userId },
      select: { roleId: true },
    });
    return rows.map((r) => r.roleId);
  }

  /**
   * Lấy danh sách tên permission (name) của các role. Dùng cho guard kiểm tra theo tên.
   */
  async getPermissionNamesByRoleIds(roleIds: string[]): Promise<string[]> {
    if (roleIds.length === 0) return [];
    const rows = await this.prisma.rolePermission.findMany({
      where: { roleId: { in: roleIds } },
      include: {
        permission: { select: { name: true, isActive: true } },
      },
    });
    const names = new Set<string>();
    for (const rp of rows) {
      if (rp.permission?.isActive && rp.permission?.name)
        names.add(rp.permission.name);
    }
    return Array.from(names);
  }

  /**
   * Lấy danh sách { path, method } của các permission thuộc các role (dùng cho guard so khớp route).
   */
  async getPathPermissionsByRoleIds(
    roleIds: string[],
  ): Promise<{ path: string; method: string | null }[]> {
    if (roleIds.length === 0) return [];

    const rows = await this.prisma.rolePermission.findMany({
      where: { roleId: { in: roleIds } },
      include: {
        permission: {
          select: { path: true, method: true, isActive: true },
        },
      },
    });

    const list: { path: string; method: string | null }[] = [];
    for (const rp of rows) {
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
