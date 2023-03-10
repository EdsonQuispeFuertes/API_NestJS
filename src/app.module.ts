import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CustomerController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { ProductsService } from './services/products.service';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CustomerController,
    UsersController,
  ],
  providers: [
    AppService,
    ProductsService,
    CustomersService,
    UsersService,
  ],
})
export class AppModule {}
