import { useClipboard as useMantineClipboard } from '@mantine/hooks'

import { useFallbackClipboard } from './use-fallback-clipboard.js'

const isClipboardApiSupported = () => {
  return !!(window.isSecureContext && navigator?.clipboard)
}

export function useClipboard({ timeout = 2000 } = {}) {
  const clipboard = useMantineClipboard({ timeout })
  const fallbackClipboard = useFallbackClipboard({ timeout })

  if (isClipboardApiSupported()) {
    return clipboard
  }

  return fallbackClipboard
}
