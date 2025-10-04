import { IsString, IsOptional, IsBoolean, MinLength, MaxLength, IsEnum, IsNotEmpty } from 'class-validator';
import { PermissionResource, PermissionAction } from 'generated/prisma';

export class CreatePermissionDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  name: string; // "achievement.create", "user.delete"

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  displayName: string; // "Create Achievement", "Delete User"

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsEnum(PermissionResource)
  @IsNotEmpty()
  resource: PermissionResource; // "achievement", "user", "studySet"

  @IsEnum(PermissionAction)
  @IsNotEmpty()
  action: PermissionAction; // "create", "read", "update", "delete", "manage"

  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}

export class UpdatePermissionDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(100)
  displayName?: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsEnum(PermissionResource)
  @IsOptional()
  resource?: PermissionResource;

  @IsEnum(PermissionAction)
  @IsOptional()
  action?: PermissionAction;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class PermissionResponseDto {
  id: string;
  name: string;
  displayName: string;
  description?: string;
  resource: PermissionResource;
  action: PermissionAction;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(permission: any) {
    this.id = permission.id;
    this.name = permission.name;
    this.displayName = permission.displayName;
    this.description = permission.description;
    this.resource = permission.resource;
    this.action = permission.action;
    this.isActive = permission.isActive;
    this.createdAt = permission.createdAt;
    this.updatedAt = permission.updatedAt;
  }
}

export class GetPermissionsQueryDto {
  @IsEnum(PermissionResource)
  @IsOptional()
  resource?: PermissionResource;

  @IsEnum(PermissionAction)
  @IsOptional()
  action?: PermissionAction;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  search?: string;
}
