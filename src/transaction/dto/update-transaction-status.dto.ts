import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateTransactionDto } from './create-transaction.dto';

export class UpdateTransactionStatusDto {
  id:number
  @ApiProperty()
  status:number
}
