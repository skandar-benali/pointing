import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT, NODE_ENV } from './configs';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    Logger.log(`◭ server running on port ${PORT} ◭  on ${NODE_ENV} mode`);
  });
}
bootstrap();
