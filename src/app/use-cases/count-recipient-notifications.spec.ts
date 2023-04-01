/* eslint-disable prettier/prettier */
import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('This is a notification'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('This is a notification'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('This is a notification'),
        category: 'social',
        recipientId: 'recipient-3',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1'
    });

    expect(count).toEqual(2)
  });
});
