import { ApiProperty } from "@nestjs/swagger";
import { CreateProductPurchaseItemDto } from "./create-product-purchase-item.dto";

export class CreateProductPurchaseDto {

  @ApiProperty()
  code: string;
  @ApiProperty()
  subTotal: number;
  @ApiProperty()
  grandTotal: number;
  @ApiProperty()
  createdBy: string;
  @ApiProperty({type:CreateProductPurchaseItemDto, isArray:true})
  productPurchaseItems: CreateProductPurchaseItemDto[];
}
