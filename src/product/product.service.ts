import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.find();
    return products;
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ id });
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }

  async create(data: CreateProductDto): Promise<Product> {
    const template = this.productRepository.create(data);
    const saved = this.productRepository.save(template);
    if (!saved) {
      throw new InternalServerErrorException('fail to create product');
    }
    return saved;
  }

  async update(id: number, data: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    const updated = await this.productRepository.save(
      Object.assign(product, data),
    );
    return updated;
  }

  async remove(id: number): Promise<void> {
    const deleted = await this.productRepository.delete(id);
    if (!deleted) {
      throw new InternalServerErrorException('product not deleted');
    } else {
      true;
    }
  }
}
