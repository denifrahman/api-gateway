import { Injectable } from "@nestjs/common";
import { CreateProductPurchaseDto } from "./dto/create-product-purchase.dto";
import { UpdateProductPurchaseDto } from "./dto/update-product-purchase.dto";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { CreateProductDto } from "../product/dto/create-product.dto";

@Injectable()
export class ProductPurchaseService {
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

  create(createProductPurchaseDto: CreateProductPurchaseDto) {
    return this.clientProxy.send<CreateProductDto>("createProductPurchase", createProductPurchaseDto);
  }

  async findAll(param = { page: 0, size: 10 }) {
    return await this.clientProxy.send("findAllProductPurchase", param);
  }
}
