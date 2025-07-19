import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { HashingService } from 'src/shared/service/hashing.service';
import { PrismaService } from 'src/shared/service/prisma.service';
import { LoginDto, LogoutDto, RefreshTokenDto, RegisterDto } from './auth.dto';
import { TokenService } from 'src/shared/service/token.service';
import { Prisma } from 'generated/prisma';
import { TokenExpiredError } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private readonly hashingService: HashingService, 
        private readonly prisma: PrismaService,
        private readonly tokenService: TokenService
    ) {}
    async register(body: RegisterDto) {
        try {
            if (body.password !== body.confirmPassword) {
                throw new Error('Password and confirm password do not match');
            }
            const hashedPassword = await this.hashingService.hashPassword(body.password);
            const user = await this.prisma.user.create({
                data: {
                    email: body.email,
                    password: hashedPassword,
                    name: body.name
                }
            });
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async login(body: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: body.email
            }
        
        });
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        const isPasswordValid = await this.hashingService.comparePassword(body.password, user.password);
        if (!isPasswordValid) {

            throw new UnprocessableEntityException({
                field: 'password',
                message: 'Invalid password'
            });
        }
        const { accessToken, refreshToken } = await this.generateTokens(user.id);
        return {
            user,
            accessToken,
            refreshToken
        };
        
    }


    async generateTokens(userId: string) {
        const accessToken = this.tokenService.signAccessToken({ userId });
        const refreshToken = this.tokenService.signRefreshToken({ userId });
        const decodedRefreshToken = await this.tokenService.verifyRefreshToken(refreshToken);
        await this.prisma.refreshToken.create({
            data: {
                token: refreshToken,
                userId: userId,
                expiresAt: new Date(decodedRefreshToken.exp * 1000)
            }
        });
  
        return {
            accessToken,
            refreshToken
        };
    }

    async refreshToken(body: RefreshTokenDto) {

        try {
            //1. Check if refresh token is valid
            const decodedRefreshToken = await this.tokenService.verifyRefreshToken(body.refreshToken);
            console.log(decodedRefreshToken);
            console.log(body.refreshToken);
            if(!decodedRefreshToken){
                throw new UnauthorizedException('Invalid refresh token');
            }
            // 2. Check if refresh token is in the database
            const checkRefreshToken = await this.prisma.refreshToken.findUniqueOrThrow({
                where: {
                    token: body.refreshToken
                }
            });
            console.log(checkRefreshToken);
        //    3. delete the refresh token from the database
           await this.prisma.refreshToken.delete({
            where: {
                token: body.refreshToken
            }
           });
           // 4. generate new tokens
            const { accessToken, refreshToken } = await this.generateTokens(decodedRefreshToken.userId);
            return {
                accessToken,
                refreshToken
            };
       
            
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                throw new UnauthorizedException('Refresh token has expired');
            }
            if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new UnauthorizedException('Invalid refresh token');
            }
            throw new UnauthorizedException('Something went wrong');
        }
        
    }
    async logout(body: LogoutDto) {
        try {
            const decodedRefreshToken = await this.tokenService.verifyRefreshToken(body.refreshToken);
            if(!decodedRefreshToken){
                throw new UnauthorizedException('Invalid refresh token');
            }
            await this.prisma.refreshToken.delete({
                where: {
                    token: body.refreshToken
                }
            });
            return {
                message: 'Logged out successfully'
            };
        } catch (error) {
            if(error instanceof TokenExpiredError){
                throw new UnauthorizedException('Refresh token has expired');
            }
            if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025'){
                throw new UnauthorizedException('Invalid refresh token');
            }
            throw new UnauthorizedException('Something went wrong');
        }
    }
    async getCurrentUser(userId: string) {
        const user = await this.prisma.user.findUniqueOrThrow({
            where: {
                id: userId
            }
        });
        return user;
    }
}

