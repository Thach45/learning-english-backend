// src/shared/decorator/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { EUserRole } from 'generated/prisma';

export const ROLES_KEY = 'roles';

/** Chỉ cho phép các role được liệt kê. VD: @Roles(EUserRole.ADMIN) */
export const Roles = (...roles: EUserRole[]) => SetMetadata(ROLES_KEY, roles);