import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceAdminService } from './device.admin.service';
import { CreateDeviceAdminDto } from './dto/create-device-admin.dto';
import { UpdateDeviceAdminDto } from './dto/update-device-admin.dto';

@Controller('device/admin')
export class DeviceAdminController {
  constructor(private readonly deviceService: DeviceAdminService) {}

  @Post()
  create(@Body() createDeviceDto: CreateDeviceAdminDto) {
    return this.deviceService.create(createDeviceDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceAdminDto) {
    return this.deviceService.update(+id, updateDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceService.remove(+id);
  }
}
