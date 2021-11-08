import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT, NODE_ENV } from './configs';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Pointing')
    .setDescription('The Pointing API description')
    .setVersion('1.0')
    .addTag('Pointing')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(PORT, () => {
    Logger.log(
      `◭ server running on port ${PORT} ◭  open http://localhost:${PORT} for documentation`,
    );
  });
}
bootstrap();
