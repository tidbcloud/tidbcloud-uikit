import { LoadingOverlay as MatineLoadingOverlay, LoadingOverlayProps } from '@mantine/core'
import React from 'react'

import { Loader } from '../Loader'

export function LoadingOverlay({ loader, loaderProps, ...rest }: LoadingOverlayProps) {
  const defaultLoader = <Loader {...loaderProps} />

  return <MatineLoadingOverlay loader={loader || defaultLoader} {...rest} />
}
