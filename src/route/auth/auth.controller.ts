import { Body, ClassSerializerInterceptor, Controller, Get, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto, LogoutDto, LogoutResponseDto, MeResponseDto, RefreshTokenDto, RefreshTokenResponseDto, RegisterDto, RegisterResponseDto } from './auth.dto';
import { ActiveUser } from 'src/shared/decorator/active-user.decorator';
import { User } from 'generated/prisma/client';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { TokenPayload } from 'src/types/token.type';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('register')
    async register(@Body() body: RegisterDto) {
        const user = await this.authService.register(body);
        return new RegisterResponseDto(user);
    }

    @Post('login')
    async login(@Body() body: LoginDto) {
        console.log(body);
        const user = await this.authService.login(body);
        return new LoginResponseDto(user);
    }

    @Post('refresh-token')
    async refreshToken(@Body() body: RefreshTokenDto) {
        const user = await this.authService.refreshToken(body);
        return new RefreshTokenResponseDto(user);
       
    }
    @Post('logout')
    async logout(@Body() body: LogoutDto) {
        const user = await this.authService.logout(body);
        return new LogoutResponseDto(user);
    }
    @Auth(['access-token'], 'or')
    @UseGuards(AuthenticationGuard)
    @Get('me')
    async me(@ActiveUser() user: TokenPayload) {
        console.log(user.userId);
        const userData = await this.authService.getCurrentUser(user.userId);
        return new MeResponseDto(userData);
    }
}
