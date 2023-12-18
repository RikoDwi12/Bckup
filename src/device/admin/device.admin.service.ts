import { Injectable } from '@nestjs/common';
import { CreateDeviceAdminDto } from './dto/create-device-admin.dto';
import { UpdateDeviceAdminDto } from './dto/update-device-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeviceAdminService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDeviceAdminDto: CreateDeviceAdminDto) {
    // Your implementation for creating a new device
    return 'This action adds a new device';
  }

  // Uncomment and adjust the implementation based on your requirements
  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  update(id: number, updateDeviceAdminDto: UpdateDeviceAdminDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
