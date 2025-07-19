import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from 'src/types/token.type';
import { randomUUID } from 'crypto';

@Injectable()
export class TokenService {
    private readonly algorithm = 'HS256';
    constructor(private readonly jwtService: JwtService) {}

    signAccessToken(payload: {userId: string }) {
    
        return this.jwtService.sign(payload, { 
            secret: process.env.ACCESS_TOKEN_SECRET, 
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
            algorithm: this.algorithm
        });
    }

    signRefreshToken(payload: { userId: string }) {
        // Thêm jti ngẫu nhiên để bảo đảm mỗi refresh token là duy nhất
        const jti = randomUUID();
        return this.jwtService.sign(
            { ...payload, jti },
            {
            secret: process.env.REFRESH_TOKEN_SECRET, 
            expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
                algorithm: this.algorithm,
            },
        );
    }

    verifyAccessToken(token: string): Promise<TokenPayload>  {
        return this.jwtService.verifyAsync(token, { 
            secret: process.env.ACCESS_TOKEN_SECRET,
            algorithms: [this.algorithm]
        });
    }

    verifyRefreshToken(token: string): Promise<TokenPayload> {
        return this.jwtService.verifyAsync(token, { 
            secret: process.env.REFRESH_TOKEN_SECRET,
            algorithms: [this.algorithm]
        });
    }
}
