import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { HashingService } from 'src/shared/service/hashing.service';
import { PrismaService } from 'src/shared/service/prisma.service';
import { ForgotPasswordBodyDto, LoginDto, LogoutDto, RefreshTokenDto, RegisterDto, SendOtpDto } from './auth.dto';
import { TokenService } from 'src/shared/service/token.service';
import { Prisma, VerificationType } from 'generated/prisma';
import { TokenExpiredError } from '@nestjs/jwt';
import { SharedUserRepo } from 'src/shared/repo/shared-user';
import { generateOtp } from 'src/shared/helper/otp';
import { addMilliseconds } from 'date-fns';
import * as ms from 'ms';
import { SendEmailService } from 'src/shared/service/send-email.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly hashingService: HashingService, 
        private readonly prisma: PrismaService,
        private readonly sharedUserRepo: SharedUserRepo,
        private readonly tokenService: TokenService,
        private readonly sendEmailService: SendEmailService
    ) {}
    async register(body: RegisterDto) {
        try {
            if (body.password !== body.confirmPassword) {
                throw new Error('Password and confirm password do not match');
            }
            const otp = await this.prisma.verificationCode.findFirst({
                where: {
                    email: body.email,
                    type: VerificationType.REGISTER,
                    code: body.otp,
                },
            });
            if(!otp){
                throw new UnprocessableEntityException({
                    field: 'otp',
                    message: 'Invalid otp'
                    
                });
            }
            if(otp.expiresAt < new Date()){
                throw new UnprocessableEntityException({
                    field: 'otp',
                    message: 'Otp has expired'
                });
            }
            const hashedPassword = await this.hashingService.hashPassword(body.password);
            const user = await this.prisma.user.create({
                data: {
                    email: body.email,
                    password: hashedPassword,
                    name: body.name
                }
            });
            await this.prisma.verificationCode.delete({
                where: {
                    id: otp.id
                },
            });
            
            // Loại bỏ password khỏi response
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002'){
                throw new UnprocessableEntityException({
                    field: 'email',
                    message: 'Email already exists'
                });
            }
            if(error instanceof UnprocessableEntityException){
                throw error;
            }
            throw new UnprocessableEntityException({
                message: error.message || 'Registration failed'
            });
        }
    }
    async sendOtp(body: SendOtpDto) {
        try {
            //1 check exsit mail
            const emailExist = await this.sharedUserRepo.findUserByEmail(body.email);
            
           
            if(body.type === VerificationType.REGISTER && emailExist){
            
                throw new UnprocessableEntityException('User already exists');
            }
            if(body.type === VerificationType.FORGOT_PASSWORD && !emailExist){
             
                throw new UnprocessableEntityException('User not found');
            }
            const code = generateOtp();
            
            const expireOtp = ms(process.env.EXPIRE_OTP || '5m');
            const type = body.type as VerificationType;
            const existOtp = await this.prisma.verificationCode.findFirst({
                where: {
                    email: body.email,
                    type: type,
                    expiresAt: {
                        gt: new Date()
                    }
                },
            });
            if(existOtp){
                throw new UnprocessableEntityException('Please wait 5 minute to send otp again');
            }
            const verificationCode = await this.prisma.verificationCode.create({
                data: {
                    email: body.email,
                    type: type,
                    code: code,
                    expiresAt: addMilliseconds(new Date(), expireOtp)
                },
            });
            await this.sendEmailService.sendOtpEmail({
                recipientEmail: body.email,
                otp: code
            });
            return {
                message: 'Otp sent successfully'
            };
          
        } catch (error) {
            throw error;    
        }
        
        

        
    }
    async login(body: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: body.email
            },
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
        
        // Loại bỏ password khỏi response
        const { password, ...userWithoutPassword } = user;
        
        return {
            user: userWithoutPassword,
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
        
        // Loại bỏ password khỏi response
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    async forgotPassword(body: ForgotPasswordBodyDto) {
        try {
            if(body.password !== body.confirmPassword){
                throw new UnprocessableEntityException({
                    field: 'password',
                    message: 'Password and confirm password do not match'
                });
            }
            const user = await this.sharedUserRepo.findUserByEmail(body.email);
            if(!user){
                throw new UnprocessableEntityException({
                    field: 'email',
                    message: 'User not found'
                });
            }
            
            const otp = await this.prisma.verificationCode.findFirst({
                where: {
                    email: body.email,
                    type: VerificationType.FORGOT_PASSWORD,
                    code: body.otp
                }
            });
            
            if(!otp){
                throw new UnprocessableEntityException({
                    field: 'otp',
                    message: 'Invalid otp'
                });
            }
            
            if(otp.expiresAt < new Date()){
                throw new UnprocessableEntityException({
                    field: 'otp',
                    message: 'Otp has expired'
                });
            }
            
            const hashedPassword = await this.hashingService.hashPassword(body.password);
            await this.prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    password: hashedPassword
                }
            });
            
            await this.prisma.verificationCode.delete({
                where: {
                    id: otp.id
                }
            });
            
            return {
                message: 'Password updated successfully'
            };
        } catch (error) {
            if(error instanceof UnprocessableEntityException){
                throw error;
            }
            throw new UnprocessableEntityException({
                message: error.message || 'Password update failed'
            });
        }
    }
}

