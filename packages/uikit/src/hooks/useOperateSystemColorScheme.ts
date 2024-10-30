import { useMediaQuery } from '@mantine/hooks'

export function useOperateSystemColorScheme() {
  return useMediaQuery('(prefers-color-scheme: dark)', false, {
    getInitialValueInEffect: false
  })
    ? 'dark'
    : 'light'
}
