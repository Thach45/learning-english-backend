import { Body, ClassSerializerInterceptor, Controller, Get, Post, Put, Delete, Param, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto, UpdatePermissionDto, PermissionResponseDto, GetPermissionsQueryDto } from './permission.dto';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { PermissionResource, PermissionAction } from 'generated/prisma';

@Controller('permissions')
@UseInterceptors(ClassSerializerInterceptor)
@Auth(['access-token'], 'or')
@UseGuards(AuthenticationGuard)
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) {}

    @Post("")
    async create(@Body() dto: CreatePermissionDto) {
        const permission = await this.permissionService.createPermission(dto);
        return new PermissionResponseDto(permission);
    }

    @Get("")
    async findAll(@Query() query: GetPermissionsQueryDto) {
        const permissions = await this.permissionService.findAllPermissions(query);
        return permissions.map(permission => new PermissionResponseDto(permission));
    }

    @Get(":id")
    async findOne(@Param('id') id: string) {
        const permission = await this.permissionService.findPermissionById(id);
        return new PermissionResponseDto(permission);
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() dto: UpdatePermissionDto) {
        const permission = await this.permissionService.updatePermission(id, dto);
        return new PermissionResponseDto(permission);
    }

    @Delete(":id")
    async remove(@Param('id') id: string) {
        const permission = await this.permissionService.deletePermission(id);
        return new PermissionResponseDto(permission);
    }

    @Get("resource/:resource")
    async findByResource(@Param('resource') resource: PermissionResource) {
        const permissions = await this.permissionService.getPermissionsByResource(resource);
        return permissions.map(permission => new PermissionResponseDto(permission));
    }

    @Get("action/:action")
    async findByAction(@Param('action') action: PermissionAction) {
        const permissions = await this.permissionService.getPermissionsByAction(action);
        return permissions.map(permission => new PermissionResponseDto(permission));
    }

    @Get("role/:roleId")
    async findByRole(@Param('roleId') roleId: string) {
        const permissions = await this.permissionService.getPermissionsByRole(roleId);
        return permissions.map(permission => new PermissionResponseDto(permission));
    }
}