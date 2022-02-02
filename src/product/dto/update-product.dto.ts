import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
