import { ArgumentsHost, Catch, HttpStatus } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "@prisma/client";
import { Response } from "express";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Lỗi hệ thống cơ sở dữ liệu";

    switch (exception.code) {
      case "P2002": {
        // Lỗi vi phạm Unique Constraint (ví dụ: email đã tồn tại)
        status = HttpStatus.CONFLICT;
        message = `Dữ liệu bị trùng lặp: ${exception.meta?.target}`;
        break;
      }
      case "P2025": {
        // Lỗi không tìm thấy bản ghi (ví dụ: id không tồn tại khi update/delete)
        status = HttpStatus.NOT_FOUND;
        message = "Không tìm thấy dữ liệu yêu cầu";
        break;
      }
      case "P2003": {
        // Lỗi Foreign Key Constraint
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = "Lỗi ràng buộc dữ liệu liên kết";
        break;
      }
      default:
        // Quăng lỗi mặc định cho NestJS tự lo nếu không thuộc các mã trên
        super.catch(exception, host);
        return;
    }

    // Trả về JSON theo format chuẩn
    response.status(status).json({
      statusCode: status,
      message: message,
      error: exception.name,
    });
  }
}
