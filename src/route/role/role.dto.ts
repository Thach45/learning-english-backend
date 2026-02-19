import { IsString, IsOptional, IsBoolean, MinLength, MaxLength, IsEnum, IsNotEmpty, IsArray, ArrayNotEmpty } from 'class-validator';
import { EUserRole } from 'generated/prisma';

export class CreateRoleDto {
  @IsEnum(EUserRole)
  @IsNotEmpty()
  name: EUserRole;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  displayName: string; 

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}

export class UpdateRoleDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(100)
  displayName?: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class RoleResponseDto {
  id: string;
  name: EUserRole;
  displayName: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(role: any) {
    this.id = role.id;
    this.name = role.name;
    this.displayName = role.displayName;
    this.description = role.description;
    this.isActive = role.isActive;
    this.createdAt = role.createdAt;
    this.updatedAt = role.updatedAt;
  }
}

export class GetRolesQueryDto {
  @IsEnum(EUserRole)
  @IsOptional()
  name?: EUserRole;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  search?: string;
}

export class AssignPermissionToRoleDto {
  @IsString()
  @IsNotEmpty()
  permissionId: string;
}

export class AssignPermissionsToRoleDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  permissionIds: string[];
}

export class RemovePermissionFromRoleDto {
  @IsString()
  @IsNotEmpty()
  permissionId: string;
}

export class RemovePermissionsFromRoleDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  permissionIds: string[];
}

export class RoleWithPermissionsDto {
  id: string;
  name: EUserRole;
  displayName: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  permissions: PermissionResponseDto[];

  constructor(role: any) {
    this.id = role.id;
    this.name = role.name;
    this.displayName = role.displayName;
    this.description = role.description;
    this.isActive = role.isActive;
    this.createdAt = role.createdAt;
    this.updatedAt = role.updatedAt;
    this.permissions = role.rolePermissions?.map(p => new PermissionResponseDto(p)) || [];
  }
}

export class PermissionResponseDto {
  id: string;
  name: string;
  path: string | null;
  method: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(permission: any) {
    this.id = permission.id;
    this.name = permission.name;
    this.path = permission.path ?? null;
    this.method = permission.method ?? null;
    this.isActive = permission.isActive;
    this.createdAt = permission.createdAt;
    this.updatedAt = permission.updatedAt;
  }
}