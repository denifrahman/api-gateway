import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class ReportService {
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

  margin(type= 'DAY') {
    return this.clientProxy.send('margin', type);
  }

  transaction(type= 'DAY') {
    return this.clientProxy.send('transaction', type);
  }

  customer(type= 'DAY') {
    return this.clientProxy.send('customer', type);
  }
}
