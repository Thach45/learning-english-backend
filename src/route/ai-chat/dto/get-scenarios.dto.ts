import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString, Min } from "class-validator";

export class GetScenariosQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: "Page phải là số nguyên" })
  @Min(1, { message: "Page tối thiểu là 1" })
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: "Limit phải là số nguyên" })
  @Min(1, { message: "Limit tối thiểu là 1" })
  limit: number = 20;

  @IsOptional()
  @IsString()
  level?: string;
}

export class AiScenarioDto {
  id: string;
  title: string;
  description: string | null;
  prompt: string;
  level: string | null;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<AiScenarioDto>) {
    Object.assign(this, partial);
  }
}

export class GetScenariosResponseDto {
  items: AiScenarioDto[];
  total: number;
  page: number;
  limit: number;
}
