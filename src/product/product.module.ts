import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductGrpcServerController } from './product-grpc-server/product-grpc-server.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController, ProductGrpcServerController],
  providers: [ProductService],
})
export class ProductModule {}
