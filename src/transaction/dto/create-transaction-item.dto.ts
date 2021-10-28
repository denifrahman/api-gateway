import { ApiProperty } from "@nestjs/swagger";

export class CreateTransactionItemDto {
  @ApiProperty()
  productId: number;
  @ApiProperty()
  price: number;
}
