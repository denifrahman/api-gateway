import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { ProductPurchaseService } from "./product-purchase.service";
import { CreateProductPurchaseDto } from "./dto/create-product-purchase.dto";
import { UpdateProductPurchaseDto } from "./dto/update-product-purchase.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("product-purchase")
@ApiTags("product-purchase")
export class ProductPurchaseController {
  constructor(private readonly productPurchaseService: ProductPurchaseService) {
  }

  @Post()
  create(@Body() createProductPurchaseDto: CreateProductPurchaseDto) {
    return this.productPurchaseService.create(createProductPurchaseDto);
  }

  @Get()
  findAll(
    @Query("page") page: number,
    @Query("size") size: number
  ) {
    return this.productPurchaseService.findAll({ size: size, page: page });
  }

}
