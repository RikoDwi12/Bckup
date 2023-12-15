import { Module } from '@nestjs/common';
import { DeviceModule } from './device/device.module';
import { AppConfigModule } from './config/config.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from './vendor/nest-zod';
import { AppFilter } from './app.filter';

@Module({
  imports: [DeviceModule, AppConfigModule, PrismaModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: AppFilter,
    },
  ],
})
export class AppModule {}
