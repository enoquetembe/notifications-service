/* eslint-disable prettier/prettier */
import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Your subscription has expired');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('a')).toThrow();
  });

  it('should not be able to create a notification content with more than 250 characters', () => {
    expect(() => new Content('a'.repeat(251))).toThrow();
  });
});
