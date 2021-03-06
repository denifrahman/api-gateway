import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus } from "@nestjs/common";
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiTags } from "@nestjs/swagger";
import { UpdateTransactionStatusDto } from "./dto/update-transaction-status.dto";
import { ResponseJson } from "../utils/response";

@Controller('transaction')
@ApiTags('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    let response = new ResponseJson();
    await this.transactionService.create(createTransactionDto);
    response.statusCode = HttpStatus.OK;
    response.message = "Trasaction proses";
    return response;
  }

  @Get()
  findAll(
    @Query("page") page: number,
    @Query("size") size: number
  ) {
    return this.transactionService.findAll({size: size,page: page});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(+id, updateTransactionDto);
  }


  @Patch('/status/:id')
  updateStatus(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionStatusDto) {
    return this.transactionService.updateStatus(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(+id);
  }
}
