import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags } from "@nestjs/swagger";

@Controller('customer')
@ApiTags('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll(
    @Query("page") page: number,
    @Query("size") size: number
  ) {
    return this.customerService.findAll({ size: size, page: page });
  }
}
