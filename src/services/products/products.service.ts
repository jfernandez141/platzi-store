import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from 'src/entities/produc.entity';

@Injectable()
export class ProductsService {
  private counterId = 2;
  private products: Product[] = [
    {
      id: 1,
      name: 'Camiseta',
      description: 'bla bla bla',
      price: 24900,
      stock: 14,
      image: 'url',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((iteam) => iteam.id == id);
    if (!product) {
      if (!product)
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }
  create(payload: any) {
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    this.counterId++;
    return newProduct;
  }
  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((iteam) => iteam.id === id);
      this.products[index] = payload;
      return this.products[index];
    }
    return null;
  }
}
