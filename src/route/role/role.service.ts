import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto, UpdateRoleDto, GetRolesQueryDto, AssignPermissionToRoleDto, RemovePermissionFromRoleDto, AssignPermissionsToRoleDto, RemovePermissionsFromRoleDto } from './role.dto';
import { EUserRole, Role, Permission } from 'generated/prisma';
import { PrismaService } from 'src/shared/service/prisma.service';

@Injectable()
export class RoleService {
    constructor(private readonly prisma: PrismaService) {}

    async createRole(dto: CreateRoleDto): Promise<Role> {
        // Check if role name already exists
        const existingRole = await this.prisma.role.findUnique({
          where: { name: dto.name as EUserRole },
        });
    
        if (existingRole) {
          throw new ConflictException(`Role with name '${dto.name}' already exists`);
        }
    
        return this.prisma.role.create({
          data: {
            name: dto.name as EUserRole,
            displayName: dto.displayName,
            description: dto.description,
            isActive: dto.isActive ?? true,
          },
        });
      }

    async findAllRoles(query?: GetRolesQueryDto): Promise<Role[]> {
        const where = {
            ...(query?.name && { name: query.name }),
            ...(typeof query?.isActive === 'boolean' && { isActive: query.isActive }),
            ...(query?.search && {
                OR: [
                    { displayName: { contains: query.search, mode: 'insensitive' as any } },
                    { description: { contains: query.search, mode: 'insensitive' as any } },
                ],
            }),
        };

        return this.prisma.role.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
    }

    async findRoleById(id: string): Promise<Role> {
        const role = await this.prisma.role.findUnique({
            where: { id },
        });

        if (!role) {
            throw new NotFoundException(`Role with ID ${id} not found`);
        }

        return role;
    }

    async updateRole(id: string, dto: UpdateRoleDto): Promise<Role> {
        const role = await this.prisma.role.findUnique({
            where: { id },
        });

        if (!role) {
            throw new NotFoundException(`Role with ID ${id} not found`);
        }

        return this.prisma.role.update({
            where: { id },
            data: {
                ...(dto.displayName && { displayName: dto.displayName }),
                ...(dto.description !== undefined && { description: dto.description }),
                ...(typeof dto.isActive === 'boolean' && { isActive: dto.isActive }),
            },
        });
    }

    async deleteRole(id: string): Promise<Role> {
        const role = await this.prisma.role.findUnique({
            where: { id },
        });

        if (!role) {
            throw new NotFoundException(`Role with ID ${id} not found`);
        }

        // Soft delete by setting isActive to false
        return this.prisma.role.update({
            where: { id },
            data: { isActive: false },
        });
    }

    async hardDeleteRole(id: string): Promise<Role> {
        const role = await this.prisma.role.findUnique({
            where: { id },
        });

        if (!role) {
            throw new NotFoundException(`Role with ID ${id} not found`);
        }

        // Check if role is being used by any users
        const userRoles = await this.prisma.userRole.findMany({
            where: { roleId: id },
        });

        if (userRoles.length > 0) {
            throw new ConflictException(`Cannot delete role. It is currently assigned to ${userRoles.length} user(s)`);
        }

        return this.prisma.role.delete({
            where: { id },
        });
    }

    // Role-Permission Management Methods
    async assignPermissionToRole(roleId: string, dto: AssignPermissionToRoleDto): Promise<Role> {
        // Check if role exists
        const role = await this.prisma.role.findUnique({
            where: { id: roleId },
        });

        if (!role) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        // Check if permission exists
        const permission = await this.prisma.permission.findUnique({
            where: { id: dto.permissionId },
        });

        if (!permission) {
            throw new NotFoundException(`Permission with ID ${dto.permissionId} not found`);
        }

        // Check if permission is already assigned to role
        const existingRolePermission = await this.prisma.rolePermission.findUnique({
            where: {
                roleId_permissionId: {
                    roleId,
                    permissionId: dto.permissionId,
                },
            },
        });

        if (existingRolePermission) {
            throw new ConflictException(`Permission is already assigned to this role`);
        }

        // Assign permission to role
        await this.prisma.rolePermission.create({
            data: {
                roleId,
                permissionId: dto.permissionId,
            },
        });

        // Return role with permissions
        const roleWithPermissions = await this.prisma.role.findUnique({
            where: { id: roleId },
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });

        if (!roleWithPermissions) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        return roleWithPermissions;
    }

    async removePermissionFromRole(roleId: string, dto: RemovePermissionFromRoleDto): Promise<Role> {
        // Check if role exists
        const role = await this.prisma.role.findUnique({
            where: { id: roleId },
        });

        if (!role) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        // Check if permission exists
        const permission = await this.prisma.permission.findUnique({
            where: { id: dto.permissionId },
        });

        if (!permission) {
            throw new NotFoundException(`Permission with ID ${dto.permissionId} not found`);
        }

        // Check if permission is assigned to role
        const existingRolePermission = await this.prisma.rolePermission.findUnique({
            where: {
                roleId_permissionId: {
                    roleId,
                    permissionId: dto.permissionId,
                },
            },
        });

        if (!existingRolePermission) {
            throw new NotFoundException(`Permission is not assigned to this role`);
        }

        // Remove permission from role
        await this.prisma.rolePermission.delete({
            where: {
                roleId_permissionId: {
                    roleId,
                    permissionId: dto.permissionId,
                },
            },
        });

        // Return role with permissions
        const roleWithPermissions = await this.prisma.role.findUnique({
            where: { id: roleId },
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });

        if (!roleWithPermissions) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        return roleWithPermissions;
    }

    async getRoleWithPermissions(roleId: string): Promise<Role> {
        const role = await this.prisma.role.findUnique({
            where: { id: roleId },
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });
        

        if (!role) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        return role;
    }

    async getAllRolesWithPermissions(): Promise<Role[]> {
        return this.prisma.role.findMany({
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async getAvailablePermissionsForRole(roleId: string): Promise<Permission[]> {
        // Check if role exists
        const role = await this.prisma.role.findUnique({
            where: { id: roleId },
        });

        if (!role) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        // Get all active permissions
        const allPermissions = await this.prisma.permission.findMany({
            where: { isActive: true },
            orderBy: [
                { resource: 'asc' },
                { action: 'asc' },
            ],
        });

        // Get permissions already assigned to this role
        const assignedPermissions = await this.prisma.rolePermission.findMany({
            where: { roleId },
            include: { permission: true },
        });

        const assignedPermissionIds = assignedPermissions.map(rp => rp.permissionId);

        // Return permissions that are not assigned to this role
        return allPermissions.filter(permission => !assignedPermissionIds.includes(permission.id));
    }

    // Bulk Permission Assignment Methods
    async assignPermissionsToRole(roleId: string, dto: AssignPermissionsToRoleDto): Promise<Role> {
        // Check if role exists
        const role = await this.prisma.role.findUnique({
            where: { id: roleId },
        });

        if (!role) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        // Check if all permissions exist
        const permissions = await this.prisma.permission.findMany({
            where: { id: { in: dto.permissionIds } },
        });

        if (permissions.length !== dto.permissionIds.length) {
            const foundIds = permissions.map(p => p.id);
            const notFoundIds = dto.permissionIds.filter(id => !foundIds.includes(id));
            throw new NotFoundException(`Permissions with IDs ${notFoundIds.join(', ')} not found`);
        }

        // Check which permissions are already assigned
        const existingRolePermissions = await this.prisma.rolePermission.findMany({
            where: {
                roleId,
                permissionId: { in: dto.permissionIds },
            },
        });

        if (existingRolePermissions.length > 0) {
            const alreadyAssignedIds = existingRolePermissions.map(rp => rp.permissionId);
            throw new ConflictException(`Permissions with IDs ${alreadyAssignedIds.join(', ')} are already assigned to this role`);
        }

        // Assign all permissions to role
        await this.prisma.rolePermission.createMany({
            data: dto.permissionIds.map(permissionId => ({
                roleId,
                permissionId,
            })),
        });

        // Return role with permissions
        const roleWithPermissions = await this.prisma.role.findUnique({
            where: { id: roleId },
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });

        if (!roleWithPermissions) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        return roleWithPermissions;
    }

    async removePermissionsFromRole(roleId: string, dto: RemovePermissionsFromRoleDto): Promise<Role> {
        // Check if role exists
        const role = await this.prisma.role.findUnique({
            where: { id: roleId },
        });

        if (!role) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        // Check if all permissions exist
        const permissions = await this.prisma.permission.findMany({
            where: { id: { in: dto.permissionIds } },
        });

        if (permissions.length !== dto.permissionIds.length) {
            const foundIds = permissions.map(p => p.id);
            const notFoundIds = dto.permissionIds.filter(id => !foundIds.includes(id));
            throw new NotFoundException(`Permissions with IDs ${notFoundIds.join(', ')} not found`);
        }

        // Check which permissions are assigned to this role
        const existingRolePermissions = await this.prisma.rolePermission.findMany({
            where: {
                roleId,
                permissionId: { in: dto.permissionIds },
            },
        });

        if (existingRolePermissions.length === 0) {
            throw new NotFoundException(`None of the specified permissions are assigned to this role`);
        }

        // Remove all specified permissions from role
        await this.prisma.rolePermission.deleteMany({
            where: {
                roleId,
                permissionId: { in: dto.permissionIds },
            },
        });

        // Return role with permissions
        const roleWithPermissions = await this.prisma.role.findUnique({
            where: { id: roleId },
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });

        if (!roleWithPermissions) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        return roleWithPermissions;
    }

    async replaceRolePermissions(roleId: string, dto: AssignPermissionsToRoleDto): Promise<Role> {
        // Check if role exists
        const role = await this.prisma.role.findUnique({
            where: { id: roleId },
        });

        if (!role) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        // Check if all permissions exist
        const permissions = await this.prisma.permission.findMany({
            where: { id: { in: dto.permissionIds } },
        });

        if (permissions.length !== dto.permissionIds.length) {
            const foundIds = permissions.map(p => p.id);
            const notFoundIds = dto.permissionIds.filter(id => !foundIds.includes(id));
            throw new NotFoundException(`Permissions with IDs ${notFoundIds.join(', ')} not found`);
        }

        // Remove all existing permissions from role
        await this.prisma.rolePermission.deleteMany({
            where: { roleId },
        });

        // Assign new permissions to role
        if (dto.permissionIds.length > 0) {
            await this.prisma.rolePermission.createMany({
                data: dto.permissionIds.map(permissionId => ({
                    roleId,
                    permissionId,
                })),
            });
        }

        // Return role with permissions
        const roleWithPermissions = await this.prisma.role.findUnique({
            where: { id: roleId },
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });

        if (!roleWithPermissions) {
            throw new NotFoundException(`Role with ID ${roleId} not found`);
        }

        return roleWithPermissions;
    }
}
