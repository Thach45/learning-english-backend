import { Controller, Get, Post, Body, Param, UseInterceptors, ClassSerializerInterceptor, UseGuards, Put, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, CategoryResponseDto, CategoriesResponseDto, UpdateCategoryDto } from './category.dto';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { ActiveUser } from 'src/shared/decorator/active-user.decorator';
import { TokenPayload } from 'src/types/token.type';

@Auth(['access-token'], "or")
@UseGuards(AuthenticationGuard)
@Controller('categories')
@UseInterceptors(ClassSerializerInterceptor)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto, @ActiveUser() user: TokenPayload) {
    const category = await this.categoryService.create(createCategoryDto, user.userId);
    return new CategoryResponseDto(category);
  }

  @Get()
  async findAll(@ActiveUser() user: TokenPayload) {
    const categories = await this.categoryService.findAll(user.userId);
    return new CategoriesResponseDto(categories);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const category = await this.categoryService.findOne(id);
    return new CategoryResponseDto(category);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryService.update(id, updateCategoryDto);
    return new CategoryResponseDto(category);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
