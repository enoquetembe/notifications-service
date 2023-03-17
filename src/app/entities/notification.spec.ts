/* eslint-disable prettier/prettier */
import { Content } from './content';
import { Notification } from './notification';

describe('Notification content', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Your subscription has been updated'),
      category: 'social',
      recipientId: 'new-recipient',
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
});
