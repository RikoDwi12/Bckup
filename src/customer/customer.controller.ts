import { Controller, Post, Body } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';

@Controller('users')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  createUser(@Body() createCustomerDto: CreateCustomerDto) {
    // Panggil metode createUser dari customerService dan kembalikan hasilnya
    return this.customerService.createUser(createCustomerDto);
  }
}
