import { Module } from "@nestjs/common";
import { PermissionController } from "./permission.controller";
import { PermissionService } from "./permission.service";
import { PermissionRepository } from "./permission.repo";
import { SharedModule } from "../../shared/shared.module";

@Module({
  imports: [SharedModule],
  controllers: [PermissionController],
  providers: [PermissionService, PermissionRepository],
  exports: [PermissionService],
})
export class PermissionModule {}
