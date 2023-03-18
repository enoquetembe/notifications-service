/* eslint-disable prettier/prettier */
import { Notification } from '@app/entities/notification';

export class PrismaNotificationsMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      created_at: notification.createdAt,
    };
  }
}
