import { CreateTransactionItemDto } from "./create-transaction-item.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTransactionDto {
  @ApiProperty()
  subTotal: number;
  @ApiProperty()
  discount: number;
  @ApiProperty()
  grandTotal: number;
  @ApiProperty()
  customerId: number;
  @ApiProperty()
  status: number;
  @ApiProperty({type:CreateTransactionItemDto, isArray:true})
  items:CreateTransactionItemDto[]
}
