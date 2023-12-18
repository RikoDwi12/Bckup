import { Module } from '@nestjs/common';
import { DeviceAdminService } from './device.admin.service';
import { DeviceAdminController } from './device.admin.controller';

@Module({
  controllers: [DeviceAdminController],
  providers: [DeviceAdminService],
})
export class DeviceAdminModule {}
