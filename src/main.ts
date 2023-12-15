import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const port = app.get(AppConfigService).root.app.port;
  await app.listen(port);
  console.log('server run on http://localhost:' + port);
}
bootstrap();
