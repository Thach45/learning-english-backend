import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Category } from 'generated/prisma';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsOptional()
  imageUrl?: string | null;
}

export class CategoryDto {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
  icon: string;
  color: string;
  totalStudySet: number;
  constructor(category: Category & { _count?: { studySets: number } }) {
    this.id = category.id;
    this.name = category.name;
    this.description = category.description ?? null;
    this.imageUrl = category.imageUrl ?? null;
    this.icon = category.icon;
    this.color = category.color;
    this.totalStudySet = category._count?.studySets ?? 0;
  }
}

export class CategoryResponseDto {
    data: CategoryDto;
    constructor(category: Category) {
        this.data = new CategoryDto(category);
    }
}

export class CategoriesResponseDto {
    data: CategoryDto[];
    constructor(categories: Category[]) {
        this.data = categories.map(c => new CategoryDto(c));
    }
}

export class UpdateCategoryDto extends CreateCategoryDto {}