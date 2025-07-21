import { Body, ClassSerializerInterceptor, Controller, Get, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ForgotPasswordBodyDto, LoginDto, LoginResponseDto, LogoutDto, LogoutResponseDto, MeResponseDto, RefreshTokenDto, RefreshTokenResponseDto, RegisterDto, RegisterResponseDto, SendOtpDto } from './auth.dto';
import { ActiveUser } from 'src/shared/decorator/active-user.decorator';
import { User } from 'generated/prisma/client';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { TokenPayload } from 'src/types/token.type';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
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
    @Post('send-otp')
    async sendOtp(@Body() body: SendOtpDto) {
        const otp = await this.authService.sendOtp(body);
        return otp;
    }
    @Post("forgot-password")
    async forgotPassword(@Body() body: ForgotPasswordBodyDto) {
        const data = await this.authService.forgotPassword(body);
        return data;    
    }
    // @Get('google-link')
   
    // async googleLink(@UserAgent() userAgent: string) {
    //     const link = await this.googleService.googleLink(userAgent);
    //     return link;
    // }
    // @Get('google/callback')
    // async googleCallback(@Query('code') code: string, @Query('state') state: string, @Res() res: Response) {
    //     try {
    //         const data = await this.googleService.googleCallback(code, state);
    //         res.redirect(process.env.GOOGLE_CLIENT_REDIRECT+ "?accessToken=" + data?.accessToken + "&refreshToken=" + data?.refreshToken);
    //     } catch (error) {
    //         const message = error instanceof Error ? error.message : 'Error in google callback';
    //        res.redirect(process.env.GOOGLE_CLIENT_REDIRECT+ "?error=" + message);
    //     }
    // }
}
