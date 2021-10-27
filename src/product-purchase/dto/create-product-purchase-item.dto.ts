import { ApiProperty } from "@nestjs/swagger";

export class CreateProductPurchaseDto {

  @ApiProperty()
  code: string;
  @ApiProperty()
  subTotal: number;
  @ApiProperty()
  grandTotal: number;
  @ApiProperty()
  createdBy: string;
}
