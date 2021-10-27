import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class ProductService {
  clientProxy: ClientProxy;

  constructor() {
    this.clientProxy = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ["amqp://localhost:5672"],
        queue: "main_queue",
        noAck: false,
        queueOptions: {
          durable: false
        }
      }
    });
  }

  create(createProductDto: CreateProductDto) {
    return this.clientProxy.send<CreateProductDto>("CREATE_PRODUCT", createProductDto);
  }

  async findAll(param = { page: 0, size: 10 }) {
    return await this.clientProxy.send("FIND_ALL_PRODUCT", param);
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
