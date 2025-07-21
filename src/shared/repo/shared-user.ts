import { Injectable } from "@nestjs/common";
import { PrismaService } from "../service/prisma.service";
import { User } from "generated/prisma";

@Injectable()
export class SharedUserRepo {
    constructor(private readonly prisma: PrismaService) {}

    async findUserByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: { email }
        });
        return user;
    }
    
}