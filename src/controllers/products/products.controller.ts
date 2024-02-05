import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: this.productsService.findAll(),
    };
  }

  @Get('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') id: number) {
    return { message: this.productsService.findOne(id) };
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productsService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Se elimino el producto con id ${id}`,
    };
  }
}
