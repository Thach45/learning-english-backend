import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./service/prisma.service";
import { HashingService } from "./service/hashing.service";
import { TokenService } from "./service/token.service";
import { JwtModule } from "@nestjs/jwt";
import { ApiKeyGuard } from "./guards/api-key.guard";
import { AccessTokenGuard } from "./guards/auth.guard";
import { AuthenticationGuard } from "./guards/authentication.guard";
import { SendEmailService } from "./service/send-email.service";
import { SharedUserRepo } from "./repo/shared-user";
import { GeminiService } from "./service/ai.service";
import { DeepseekService } from "./service/deepseek.service";
import { UploadService } from "./service/upload.service";
const sharedServices = [
  PrismaService,
  HashingService,
  TokenService,
  SharedUserRepo,
  ApiKeyGuard,
  SendEmailService,
  AccessTokenGuard,
  AuthenticationGuard,
  SharedUserRepo,
  UploadService,
  GeminiService,
  DeepseekService,
];
@Global()
@Module({
  providers: sharedServices,
  exports: sharedServices,
  imports: [JwtModule],
})
export class SharedModule {}
