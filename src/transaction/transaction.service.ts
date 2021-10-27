import { Injectable } from "@nestjs/common";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { CreateProductDto } from "../product/dto/create-product.dto";
import { UpdateTransactionStatusDto } from "./dto/update-transaction-status.dto";

@Injectable()
export class TransactionService {
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

  create(createTransactionDto: CreateTransactionDto) {
    return this.clientProxy.send<CreateProductDto>("createTransaction", createTransactionDto);
    ;
  }

  findAll(param = { page: 0, size: 10 }) {
    return this.clientProxy.send("findAllTransaction", param);
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    updateTransactionDto.id = id;
    return this.clientProxy.send("updateTransaction", updateTransactionDto);
  }

  updateStatus(id: number, updateTransactionDto: UpdateTransactionStatusDto) {
    updateTransactionDto.id = id;
    return this.clientProxy.send("updateTransactionStatus", updateTransactionDto);
  }

  remove(id: number) {
    return this.clientProxy.send("removeTransaction", id);
    ;
  }
}
