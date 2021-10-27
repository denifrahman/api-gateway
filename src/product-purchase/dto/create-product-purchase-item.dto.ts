import { ApiProperty } from "@nestjs/swagger";

export class CreateProductPurchaseItemDto {
  @ApiProperty()
  productPurchaseId: number;
  @ApiProperty()
  produkId: number;
  @ApiProperty()
  qty: number;
  @ApiProperty()
  purchasePrice: number;
}
