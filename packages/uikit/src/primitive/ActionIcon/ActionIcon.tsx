import { ActionIcon as MantineActionIcon, ActionIconProps, createPolymorphicComponent } from '@mantine/core'

import { withLoaderPatch } from '../Loader'

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>(
  withLoaderPatch<HTMLButtonElement, ActionIconProps>(MantineActionIcon)
)
