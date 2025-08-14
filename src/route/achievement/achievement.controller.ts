import { Controller, Get } from '@nestjs/common';

@Controller('achievement')
export class AchievementController {
    @Get()
    async getAchievements() {
        
    }
}
