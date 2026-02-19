import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { Auth } from "src/shared/decorator/auth.decorator";
import { AuthenticationGuard } from "src/shared/guards/authentication.guard";
import { PermissionService } from "./permission.service";
import {
  CreatePermissionDto,
  UpdatePermissionDto,
  PermissionResponseDto,
  GetPermissionsQueryDto,
} from "./permission.dto";

@Controller("permissions")
@Auth(["access-token"], "or")
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
    return permissions.map((p) => new PermissionResponseDto(p));
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const permission = await this.permissionService.findPermissionById(id);
    return new PermissionResponseDto(permission);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() dto: UpdatePermissionDto) {
    const permission = await this.permissionService.updatePermission(id, dto);
    return new PermissionResponseDto(permission);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    const permission = await this.permissionService.deletePermission(id);
    return new PermissionResponseDto(permission);
  }

  @Get("role/:roleId")
  async findByRole(@Param("roleId") roleId: string) {
    const permissions = await this.permissionService.getPermissionsByRole(roleId);
    return permissions.map((p) => new PermissionResponseDto(p));
  }
}
