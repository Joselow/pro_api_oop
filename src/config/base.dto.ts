import { IsDate, IsOptional, IsUUID } from "class-validator";

export class BaseDTO {
  @IsUUID()
  @IsOptional()
  id: string | undefined;

  @IsDate()
  @IsOptional()
  created_at!: Date;

  @IsDate()
  @IsOptional()       /// opcional?? poruqe
  updated_at!: Date;
}