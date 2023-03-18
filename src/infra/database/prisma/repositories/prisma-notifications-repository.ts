/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common/decorators';
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationsMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationsMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
