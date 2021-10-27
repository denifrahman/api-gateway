import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpStatus,
  UseInterceptors,
  UploadedFile, Req, Res
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { ResponseJson } from "../utils/response";
import { FileInterceptor } from "@nestjs/platform-express";
import { editFileName, imageFileFilter } from "../utils/file-upload.utils";
import { diskStorage } from "multer";

@Controller("product")
@ApiTags("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {
  }

  @Post()
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./uploads/foto/product",
        filename: editFileName
      }),
      fileFilter: imageFileFilter
    })
  )
  async create(@Body() createProductDto: CreateProductDto, @UploadedFile() image, @Req
  () req) {
    console.log(image);
    if (image !== undefined) {
      createProductDto.image =
        "http://" +
        req.headers.host +
        req["path"] +
        "/image/" +
        image.filename;
    }
    console.log(createProductDto);
    return await this.productService.create(createProductDto);
  }

  @Get("image/:id")
  async getFoto(@Param("id") id: string, @Res() res): Promise<any> {
    console.log(id);

    res.sendFile(id, { root: "uploads/foto/product" });
  }

  @Get()
  async findAll(
    @Query("page") page: number,
    @Query("size") size: number
  ) {
    return this.productService.findAll({ page: page, size: size });
  }
}
