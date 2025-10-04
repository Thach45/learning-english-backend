import { Body, ClassSerializerInterceptor, Controller, Get, Post, Put, Delete, Param, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto, UpdateRoleDto, RoleResponseDto, GetRolesQueryDto, AssignPermissionToRoleDto, RemovePermissionFromRoleDto, RoleWithPermissionsDto, PermissionResponseDto, AssignPermissionsToRoleDto, RemovePermissionsFromRoleDto } from './role.dto';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { TokenPayload } from 'src/types/token.type';
import { ActiveUser } from 'src/shared/decorator/active-user.decorator';

@Controller('roles')
@UseInterceptors(ClassSerializerInterceptor)
@Auth(['access-token'], 'or')
@UseGuards(AuthenticationGuard)
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Post("")
    async create(@Body() dto: CreateRoleDto) {
        const role = await this.roleService.createRole(dto);
        return new RoleResponseDto(role);
    }

    @Get("")
    async findAll(@Query() query: GetRolesQueryDto) {
        const roles = await this.roleService.findAllRoles(query);
        return roles.map(role => new RoleResponseDto(role));
    }

    @Get(":id")
    async findOne(@Param('id') id: string) {
        const role = await this.roleService.findRoleById(id);
        return new RoleResponseDto(role);
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
        const role = await this.roleService.updateRole(id, dto);
        return new RoleResponseDto(role);
    }

    @Delete(":id")
    async remove(@Param('id') id: string) {
        const role = await this.roleService.deleteRole(id);
        return new RoleResponseDto(role);
    }

    @Delete(":id/hard")
    async hardDelete(@Param('id') id: string) {
        const role = await this.roleService.hardDeleteRole(id);
        return new RoleResponseDto(role);
    }

    // Role-Permission Management Endpoints
    @Post(":id/permissions")
    async assignPermission(@Param('id') roleId: string, @Body() dto: AssignPermissionToRoleDto) {
        const role = await this.roleService.assignPermissionToRole(roleId, dto);
        return new RoleWithPermissionsDto(role);
    }

    @Delete(":id/permissions")
    async removePermission(@Param('id') roleId: string, @Body() dto: RemovePermissionFromRoleDto) {
        const role = await this.roleService.removePermissionFromRole(roleId, dto);
        return new RoleWithPermissionsDto(role);
    }

    @Get(":id/permissions")
    async getRoleWithPermissions(@Param('id') roleId: string) {
        const role = await this.roleService.getRoleWithPermissions(roleId);
        
        return new RoleWithPermissionsDto(role);
        // return role;
    }

    @Get("with-permissions")
    async getAllRolesWithPermissions() {
        const roles = await this.roleService.getAllRolesWithPermissions();
        console.log(roles);
        return roles.map(role => new RoleWithPermissionsDto(role));
    }

    @Get(":id/available-permissions")
    async getAvailablePermissions(@Param('id') roleId: string) {
        const permissions = await this.roleService.getAvailablePermissionsForRole(roleId);
        return permissions.map(permission => new PermissionResponseDto(permission));
    }

    // Bulk Permission Management Endpoints
    @Post(":id/permissions/bulk")
    async assignPermissions(@Param('id') roleId: string, @Body() dto: AssignPermissionsToRoleDto) {
        const role = await this.roleService.assignPermissionsToRole(roleId, dto);
        return new RoleWithPermissionsDto(role);
    }

    @Delete(":id/permissions/bulk")
    async removePermissions(@Param('id') roleId: string, @Body() dto: RemovePermissionsFromRoleDto) {
        const role = await this.roleService.removePermissionsFromRole(roleId, dto);
        return new RoleWithPermissionsDto(role);
    }

    @Put(":id/permissions")
    async replacePermissions(@Param('id') roleId: string, @Body() dto: AssignPermissionsToRoleDto) {
        const role = await this.roleService.replaceRolePermissions(roleId, dto);
        return new RoleWithPermissionsDto(role);
    }
}
