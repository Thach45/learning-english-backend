import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto, UpdateAchievementDto, GetAchievementsQueryDto } from './achievement.dto';
import { ActiveUser } from '../../shared/decorator/active-user.decorator';
import { TokenPayload } from 'src/types/token.type';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { Roles } from 'src/shared/decorator/roles.decorator';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { AuthorizationGuard } from 'src/shared/guards/authorization.guard';
import { EUserRole } from 'generated/prisma';

@Auth(["access-token"], "or")
@UseGuards(AuthenticationGuard)
@Controller('achievements')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  // Admin routes – yêu cầu ADMIN hoặc MODERATOR + permission trong DB
  @Post()
  @Roles(EUserRole.ADMIN)
  @UseGuards(AuthorizationGuard)
  create(@Body() dto: CreateAchievementDto) {
    return this.achievementService.createAchievement(dto);
  }

  @Put(':id')
  @Roles(EUserRole.ADMIN)
  @UseGuards(AuthorizationGuard)
  update(@Param('id') id: string, @Body() dto: UpdateAchievementDto) {
    return this.achievementService.updateAchievement(id, dto);
  }

  @Delete(':id')
  @Roles(EUserRole.ADMIN)
  @UseGuards(AuthorizationGuard)
  delete(@Param('id') id: string) {
    return this.achievementService.deleteAchievement(id);
  }

  @Get('admin')
  @Roles(EUserRole.ADMIN)
  @UseGuards(AuthorizationGuard)
  getAll(@Query() query: GetAchievementsQueryDto) {
    return this.achievementService.getAchievements(query);
  }

  // User routes
  @Get('me')
  getUserAchievements(@ActiveUser() user: TokenPayload) {
    return this.achievementService.getUserAchievements(user.userId);
  }

  @Get('me/in-progress')
  getUserInProgressAchievements(@ActiveUser() user: TokenPayload) {
    return this.achievementService.getUserInProgressAchievements(user.userId);
  }

  // Trigger achievement check manually (có thể dùng để test)
  @Post('check')
  checkAchievements(@ActiveUser() user: TokenPayload) {
    return this.achievementService.checkAndUpdateAchievements(user.userId);
  }
}