import { showNotification, cleanNotifications, NotificationProps } from '@mantine/notifications'

export * from '@mantine/notifications'

export const notifier = {
  success: (message: NotificationProps['message'], props?: Omit<NotificationProps, 'message'>) =>
    showNotification({ message, color: 'green', ...props }),
  warn: (message: NotificationProps['message'], props?: Omit<NotificationProps, 'message'>) =>
    showNotification({ message, color: 'yellow', ...props }),
  error: (message: NotificationProps['message'], props?: Omit<NotificationProps, 'message'>) =>
    showNotification({ message, color: 'red', ...props }),
  info: (message: NotificationProps['message'], props?: Omit<NotificationProps, 'message'>) =>
    showNotification({ message, color: 'cyan', ...props }),
  clear: () => cleanNotifications()
}
