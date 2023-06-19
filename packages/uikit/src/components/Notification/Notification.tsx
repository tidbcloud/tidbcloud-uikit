import { Notification as MantineNotification, NotificationProps } from '@mantine/core'

import { withLoaderPatch } from '../Loader'

export const Notification = withLoaderPatch<HTMLDivElement, NotificationProps>(MantineNotification)
