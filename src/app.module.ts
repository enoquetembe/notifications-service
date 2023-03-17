/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { PrismaService } from './infra/prisma.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
