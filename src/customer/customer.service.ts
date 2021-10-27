import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class CustomerService {
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
  create(createCustomerDto: CreateCustomerDto) {
    return this.clientProxy.send("createCustomer", createCustomerDto);
  }

  async findAll(param = { page: 0, size: 10 }) {
    return await this.clientProxy.send("findAllCustomer", param);
  }
}
