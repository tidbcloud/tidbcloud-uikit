import { LoadingOverlay as MantineLoadingOverlay, LoadingOverlayProps } from '@mantine/core'

import { withLoaderPatch } from '../../primitive/Loader'

export const LoadingOverlay = withLoaderPatch<HTMLDivElement, LoadingOverlayProps>(MantineLoadingOverlay)
