/* eslint-disable prettier/prettier */
import { Notification } from '../entities/notification'

export abstract class NotificationsRepository{
    abstract create(notification: Notification): Promise<void>
}
