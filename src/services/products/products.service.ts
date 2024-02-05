import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
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
  create(payload: CreateProductDto) {
    console.log(payload);
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    this.counterId++;
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index !== -1) {
      // Verifica si el producto existe en el array
      const updatedProduct = { ...this.products[index], ...payload }; // Clona el producto y actualiza sus propiedades con el payload

      this.products[index] = updatedProduct; // Reemplaza el producto en el array

      return updatedProduct; // Retorna el producto actualizado
    } else {
      return null; // Si el producto no existe, retorna null
    }
  }
}
