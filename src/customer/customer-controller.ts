// user.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer-service';

@Controller('users')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  createUser(@Body() createUserDto: CreateCustomerDto) {
    // Your logic to create a user using the data from createUserDto
    return this.customerService.createUser(createUserDto);
  }
}
