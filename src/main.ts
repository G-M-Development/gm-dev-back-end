import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

import { CsrfMiddleware } from './middlewares/csrf.middleware';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { PORT, CORS_HOST, CORS_METHODS, CREDENTIALS } = process.env;
const boolValue = JSON.parse(CREDENTIALS);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.use(cookieParser());
  app.use(new CsrfMiddleware().use.bind(new CsrfMiddleware()));
  app.enableCors({
    origin: CORS_HOST,
    methods: CORS_METHODS,
    credentials: boolValue,
  });
  await app.listen(PORT);
}

bootstrap();
