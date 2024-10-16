import { showNotification, cleanNotifications, NotificationData } from '@mantine/notifications'

export * from '@mantine/notifications'

export const notifier = {
  success: (message: NotificationData['message'], props?: Omit<NotificationData, 'message'>) =>
    showNotification({ message, color: 'green', ...props }),
  warn: (message: NotificationData['message'], props?: Omit<NotificationData, 'message'>) =>
    showNotification({ message, color: 'yellow', ...props }),
  error: (message: NotificationData['message'], props?: Omit<NotificationData, 'message'>) =>
    showNotification({ message, color: 'red', ...props }),
  info: (message: NotificationData['message'], props?: Omit<NotificationData, 'message'>) =>
    showNotification({ message, color: 'cyan', ...props }),
  clear: () => cleanNotifications()
}
