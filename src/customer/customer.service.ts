import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private customers: CreateCustomerDto[] = [];

  createUser(createCustomerDto: CreateCustomerDto): CreateCustomerDto {
    const data = new CreateCustomerDto();
    data.name = createCustomerDto.name;
    data.phone = createCustomerDto.phone;
    data.email = createCustomerDto.email;
    this.customers.push(data);
    return data;
  }
}