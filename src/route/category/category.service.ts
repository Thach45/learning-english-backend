import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/service/prisma.service';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto, userId: string) {
    return this.prisma.category.create({
      data: {
        ...createCategoryDto,
        author: {
          connect: { id: userId },
        },
        
      },
    });
  }

  async findAll(userId: string) {
    try {
      return this.prisma.category.findMany({
        where: { authorId: userId },
        include: { _count: { select: { studySets: true } } }
      });
    } catch (error) {
      throw new BadRequestException('Failed to get categories');
    }
  }

  async findOne(id: string) {
    try {
      return this.prisma.category.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Failed to get category');
    }
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      return this.prisma.category.update({
        where: { id },
        data: updateCategoryDto,
      });
    } catch (error) {
      throw new BadRequestException('Failed to update category');
    }
  }

  async delete(id: string) {
    try {
      return this.prisma.category.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Failed to delete category');
    }
  }
}
