import { Box, Loader as MantineLoader, LoaderProps } from '@mantine/core'
import { forwardRef } from 'react'

import { withLoaderPatch } from './patch'

const forwardedLoader = forwardRef<HTMLSpanElement, LoaderProps>((props, ref) => (
  <Box component="span" ref={ref} lh={0}>
    <MantineLoader {...props} />
  </Box>
))

forwardedLoader.displayName = MantineLoader.displayName

export const Loader = withLoaderPatch<HTMLSpanElement, LoaderProps>(forwardedLoader)
