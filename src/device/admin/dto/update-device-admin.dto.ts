import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceAdminDto } from './create-device-admin.dto';

export class UpdateDeviceAdminDto extends PartialType(CreateDeviceAdminDto) {}
