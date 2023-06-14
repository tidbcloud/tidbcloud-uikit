import { Button as MantineButton, ButtonProps, createPolymorphicComponent } from '@mantine/core'

import { withLoaderPatch } from '../Loader'

type ButtonStaticProps = {
  Group: typeof MantineButton.Group
}

export const Button = createPolymorphicComponent<'button', ButtonProps, ButtonStaticProps>(
  withLoaderPatch<HTMLButtonElement, ButtonProps, ButtonStaticProps>(MantineButton, {
    Group: MantineButton.Group
  })
)
