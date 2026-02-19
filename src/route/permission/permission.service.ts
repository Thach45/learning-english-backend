import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {
  CreatePermissionDto,
  UpdatePermissionDto,
  GetPermissionsQueryDto,
  PermissionResponseDto,
} from "./permission.dto";
import { PermissionRepository } from "./permission.repo";

/**
 * PermissionService
 * -----------------
 * Business logic cho Permission. Mọi thao tác DB qua PermissionRepository.
 */
@Injectable()
export class PermissionService {
  constructor(private readonly permissionRepo: PermissionRepository) {}

  async createPermission(dto: CreatePermissionDto) {
    const existing = await this.permissionRepo.findUniqueByName(dto.name);
    if (existing) {
      throw new ConflictException(
        `Permission with name '${dto.name}' already exists`,
      );
    }
    return this.permissionRepo.create({
      name: dto.name,
      path: dto.path,
      method: dto.method,
      isActive: dto.isActive ?? true,
    });
  }

  async findAllPermissions(query?: GetPermissionsQueryDto) {
    return this.permissionRepo.findMany({
      isActive: query?.isActive,
      search: query?.search,
      path: query?.path,
      method: query?.method,
    });
  }

  async findPermissionById(id: string) {
    const permission = await this.permissionRepo.findUniqueById(id);
    if (!permission) {
      throw new NotFoundException(`Permission with ID ${id} not found`);
    }
    return permission;
  }

  async findPermissionByName(name: string) {
    return this.permissionRepo.findUniqueByName(name);
  }

  async updatePermission(id: string, dto: UpdatePermissionDto) {
    const permission = await this.permissionRepo.findUniqueById(id);
    if (!permission) {
      throw new NotFoundException(`Permission with ID ${id} not found`);
    }
    return this.permissionRepo.update(id, dto);
  }

  async deletePermission(id: string) {
    const permission = await this.permissionRepo.findUniqueById(id);
    if (!permission) {
      throw new NotFoundException(`Permission with ID ${id} not found`);
    }
    return this.permissionRepo.setActive(id, false);
  }

  async hardDeletePermission(id: string) {
    const permission = await this.permissionRepo.findUniqueById(id);
    if (!permission) {
      throw new NotFoundException(`Permission with ID ${id} not found`);
    }
    const count = await this.permissionRepo.countRolePermissionsByPermissionId(id);
    if (count > 0) {
      throw new ConflictException(
        `Cannot delete permission. It is currently assigned to ${count} role(s)`,
      );
    }
    return this.permissionRepo.hardDelete(id);
  }

  async getPermissionsByRole(roleId: string) {
    return this.permissionRepo.getPermissionsByRole(roleId);
  }

  /**
   * Lấy danh sách { path, method } mà user có (qua các role). Dùng cho authorization guard.
   */
  async getPathPermissionsForUser(
    userId: string,
  ): Promise<{ path: string; method: string | null }[]> {
    const roleIds = await this.permissionRepo.getUserRoleIds(userId);
    return this.permissionRepo.getPathPermissionsByRoleIds(roleIds);
  }

  /**
   * Lấy danh sách tên permission mà user có (qua các role). Dùng cho guard kiểm tra theo tên.
   */
  async getPermissionNamesForUser(userId: string): Promise<string[]> {
    const roleIds = await this.permissionRepo.getUserRoleIds(userId);
    return this.permissionRepo.getPermissionNamesByRoleIds(roleIds);
  }
}
