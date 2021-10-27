import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty()
  sku: number;
  @ApiProperty()
  name: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  image: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  createdBy: string;
}
