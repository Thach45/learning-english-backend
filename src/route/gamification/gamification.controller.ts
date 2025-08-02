import { Controller, Get, Query, UseInterceptors, ClassSerializerInterceptor, NotFoundException } from '@nestjs/common';
import { GamificationService } from './gamification.service';
import { ActiveUser } from 'src/shared/decorator/active-user.decorator';
import { TokenPayload } from 'src/types/token.type';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { UseGuards } from '@nestjs/common';
import { 
  GamificationStatsResponseDto,
  DailyActivityResponseDto,
  XPEventsResponseDto,
} from './gamification.dto';

@Auth(['access-token'], "or")
@UseGuards(AuthenticationGuard) 
@UseInterceptors(ClassSerializerInterceptor)
@Controller('gamification')
export class GamificationController {
  constructor(private readonly gamificationService: GamificationService) {}

  // GET /gamification/stats
  @Get('stats')
  async getGamificationStats(@ActiveUser() user: TokenPayload) {
    const stats = await this.gamificationService.getUserGamificationStats(user.userId);
    if (!stats) {
      throw new NotFoundException('Stats not found');
    }
    return new GamificationStatsResponseDto(stats);
  }

  // GET /gamification/daily-activity
  @Get('daily-activity')
  async getDailyActivity(
    @ActiveUser() user: TokenPayload,
    @Query('date') date?: string
  ) {
    const targetDate = date ? new Date(date) : new Date();
    const activity = await this.gamificationService.getDailyActivity(user.userId, targetDate);
    return new DailyActivityResponseDto({
      ...activity,
      date: targetDate,
    });
  }

  // GET /gamification/daily-activity-stats
  @Get('daily-activity-stats')
  async getDailyActivityStats(
    @ActiveUser() user: TokenPayload,
    @Query('date') date?: string
  ) {
    const targetDate = date ? new Date(date) : new Date();
    const stats = await this.gamificationService.getDailyActivityStats(user.userId, targetDate);
    return new DailyActivityResponseDto({
      ...stats,
      date: targetDate,
    });
  }

  // GET /gamification/xp-events
  @Get('xp-events')
  async getXPEvents(
    @ActiveUser() user: TokenPayload,
    @Query('limit') limit?: string
  ) {
    try {
      const limitNumber = parseInt(limit || '50');
      
      const events = await this.gamificationService.getXPEvents(user.userId, limitNumber);
     
      
      return new XPEventsResponseDto({
        events: events.map(event => ({
          id: event.id,
          eventType: event.eventType,
          xpAmount: event.xpAmount,
          metadata: event.metadata,
          createdAt: event.createdAt,
        })),
        total: events.length,
      });
    } catch (error) {
      console.error('Error in getXPEvents controller:', error);
      // Return empty events on error
      return new XPEventsResponseDto({
        events: [],
        total: 0,
      });
    }
  }
} 