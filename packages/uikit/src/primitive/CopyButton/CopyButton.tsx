import { CopyButtonProps, useProps } from '@mantine/core'

import { useClipboard } from '../../hooks/use-clipboard/use-clipboard.js'

const defaultProps: Partial<CopyButtonProps> = {
  timeout: 1000
}

export function CopyButton(props: CopyButtonProps) {
  const { children, timeout, value, ...others } = useProps('CopyButton', defaultProps, props)
  const clipboard = useClipboard({ timeout })
  const copy = () => clipboard.copy(value)

  return <>{children({ copy, copied: clipboard.copied, ...others })}</>
}
