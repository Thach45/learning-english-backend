import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateProfileDto, UserProfileResponseDto } from './user.dto';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { ActiveUser } from 'src/shared/decorator/active-user.decorator';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { TokenPayload } from 'src/types/token.type';

/**
 * Module user: lấy và sửa thông tin cá nhân của user đang đăng nhập.
 * - GET /users/me: thông tin profile (không có password).
 * - PATCH /users/me: cập nhật profile (name, avatar, bio, website, location, dailyGoal, ...).
 */
@Controller('users')
@Auth(['access-token'], 'or')
@UseGuards(AuthenticationGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  async getMe(@ActiveUser() user: TokenPayload): Promise<UserProfileResponseDto> {
    return this.userService.getMe(user.userId);
  }

  @Patch('me')
  async updateMe(
    @ActiveUser() user: TokenPayload,
    @Body() body: UpdateProfileDto,
  ): Promise<UserProfileResponseDto> {
    return this.userService.updateMe(user.userId, body);
  }
}
