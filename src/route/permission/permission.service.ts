import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePermissionDto, UpdatePermissionDto, GetPermissionsQueryDto } from './permission.dto';
import { Permission, PermissionResource, PermissionAction } from 'generated/prisma';
import { PrismaService } from 'src/shared/service/prisma.service';

@Injectable()
export class PermissionService {
    constructor(private readonly prisma: PrismaService) {}

    async createPermission(dto: CreatePermissionDto): Promise<Permission> {
        // Check if permission name already exists
        const existingPermission = await this.prisma.permission.findUnique({
          where: { name: dto.name },
        });
    
        if (existingPermission) {
          throw new ConflictException(`Permission with name '${dto.name}' already exists`);
        }
    
        return this.prisma.permission.create({
          data: {
            name: dto.name,
            displayName: dto.displayName,
            description: dto.description,
            resource: dto.resource,
            action: dto.action,
            isActive: dto.isActive ?? true,
          },
        });
    }

    async findAllPermissions(query?: GetPermissionsQueryDto): Promise<Permission[]> {
        const where = {
            ...(query?.resource && { resource: query.resource }),
            ...(query?.action && { action: query.action }),
            ...(typeof query?.isActive === 'boolean' && { isActive: query.isActive }),
            ...(query?.search && {
                OR: [
                    { name: { contains: query.search, mode: 'insensitive' as any } },
                    { displayName: { contains: query.search, mode: 'insensitive' as any } },
                    { description: { contains: query.search, mode: 'insensitive' as any } },
                ],
            }),
        };

        return this.prisma.permission.findMany({
            where,
            orderBy: [
                { resource: 'asc' },
                { action: 'asc' },
                { createdAt: 'desc' }
            ],
        });
    }

    async findPermissionById(id: string): Promise<Permission> {
        const permission = await this.prisma.permission.findUnique({
            where: { id },
        });

        if (!permission) {
            throw new NotFoundException(`Permission with ID ${id} not found`);
        }

        return permission;
    }

    async findPermissionByName(name: string): Promise<Permission | null> {
        return this.prisma.permission.findUnique({
            where: { name },
        });
    }

    async updatePermission(id: string, dto: UpdatePermissionDto): Promise<Permission> {
        const permission = await this.prisma.permission.findUnique({
            where: { id },
        });

        if (!permission) {
            throw new NotFoundException(`Permission with ID ${id} not found`);
        }

        return this.prisma.permission.update({
            where: { id },
            data: {
                ...(dto.displayName && { displayName: dto.displayName }),
                ...(dto.description !== undefined && { description: dto.description }),
                ...(dto.resource && { resource: dto.resource }),
                ...(dto.action && { action: dto.action }),
                ...(typeof dto.isActive === 'boolean' && { isActive: dto.isActive }),
            },
        });
    }

    async deletePermission(id: string): Promise<Permission> {
        const permission = await this.prisma.permission.findUnique({
            where: { id },
        });

        if (!permission) {
            throw new NotFoundException(`Permission with ID ${id} not found`);
        }

        // Soft delete by setting isActive to false
        return this.prisma.permission.update({
            where: { id },
            data: { isActive: false },
        });
    }

    async hardDeletePermission(id: string): Promise<Permission> {
        const permission = await this.prisma.permission.findUnique({
            where: { id },
        });

        if (!permission) {
            throw new NotFoundException(`Permission with ID ${id} not found`);
        }

        // Check if permission is being used by any roles
        const rolePermissions = await this.prisma.rolePermission.findMany({
            where: { permissionId: id },
        });

        if (rolePermissions.length > 0) {
            throw new ConflictException(`Cannot delete permission. It is currently assigned to ${rolePermissions.length} role(s)`);
        }

        return this.prisma.permission.delete({
            where: { id },
        });
    }

    async getPermissionsByResource(resource: PermissionResource): Promise<Permission[]> {
        return this.prisma.permission.findMany({
            where: { 
                resource,
                isActive: true 
            },
            orderBy: { action: 'asc' },
        });
    }

    async getPermissionsByAction(action: PermissionAction): Promise<Permission[]> {
        return this.prisma.permission.findMany({
            where: { 
                action,
                isActive: true 
            },
            orderBy: { resource: 'asc' },
        });
    }

    async getPermissionsByRole(roleId: string): Promise<Permission[]> {
        const rolePermissions = await this.prisma.rolePermission.findMany({
            where: { roleId },
            include: { permission: true },
        });

        return rolePermissions.map(rp => rp.permission);
    }
}