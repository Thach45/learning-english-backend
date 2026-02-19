import {
  IsString,
  IsOptional,
  IsBoolean,
  MinLength,
  MaxLength,
  IsNotEmpty,
} from "class-validator";

export class CreatePermissionDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(200)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  path?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  method?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}

export class UpdatePermissionDto {
  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(200)
  name?: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  path?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  method?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
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

export class GetPermissionsQueryDto {
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  search?: string;

  @IsString()
  @IsOptional()
  path?: string;

  @IsString()
  @IsOptional()
  method?: string;
}
