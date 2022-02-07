import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../product.entity';
import { ProductService } from '../product.service';

@Controller()
export class ProductGrpcServerController {
  constructor(private productService: ProductService) {}

  @GrpcMethod('ProductService', 'Create')
  create(
    data: CreateProductDto,
    metadata: Metadata,
    call: ServerUnaryCall<CreateProductDto, Product>,
  ) {
    console.log({ data, metadata, call });

    return this.productService.create(data);
  }
}
