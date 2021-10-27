import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductPurchaseService } from './product-purchase.service';
import { CreateProductPurchaseDto } from './dto/create-product-purchase.dto';
import { UpdateProductPurchaseDto } from './dto/update-product-purchase.dto';

@Controller('product-purchase')
export class ProductPurchaseController {
  constructor(private readonly productPurchaseService: ProductPurchaseService) {}

  @Post()
  create(@Body() createProductPurchaseDto: CreateProductPurchaseDto) {
    return this.productPurchaseService.create(createProductPurchaseDto);
  }

  @Get()
  findAll() {
    return this.productPurchaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPurchaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductPurchaseDto: UpdateProductPurchaseDto) {
    return this.productPurchaseService.update(+id, updateProductPurchaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPurchaseService.remove(+id);
  }
}
