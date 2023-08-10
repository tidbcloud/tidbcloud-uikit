import { Notification as MantineNotification, NotificationProps } from '@mantine/core'

import { withLoaderPatch } from '../../primitive/Loader'

export const Notification = withLoaderPatch<HTMLDivElement, NotificationProps>(MantineNotification)
