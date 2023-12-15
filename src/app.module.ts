import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
import { AppConfigModule } from './config/config.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DeviceModule, AppConfigModule, PrismaModule],
  providers: [AppService],
})
export class AppModule {}
