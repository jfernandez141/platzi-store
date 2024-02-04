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

@Controller('products')
export class ProductsController {
  @Get('/')
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `${limit}, ${offset}`,
    };
  }

  @Get('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') id: string) {
    return { message: `product ${id}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Se elimino el producto con id ${id}`,
    };
  }
}
