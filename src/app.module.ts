import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { ProductPurchaseModule } from './product-purchase/product-purchase.module';
import { CustomerModule } from './customer/customer.module';
import { TransactionModule } from './transaction/transaction.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [ProductModule, ProductPurchaseModule, CustomerModule, TransactionModule, ReportModule],
  controllers: [AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
