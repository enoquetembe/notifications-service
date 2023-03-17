import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany();
  }
}
