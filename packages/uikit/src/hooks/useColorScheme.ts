import { useLocalStorage, useColorScheme as useSystemColorScheme } from '@mantine/hooks'

export const useColorScheme = (
  defaultValue: 'light' | 'dark' | 'auto',
  options: {
    getInitialValueInEffect: boolean
    key: string
  } = { getInitialValueInEffect: false, key: 'mantine-color-scheme' }
) => {
  const [colorScheme, setColorScheme] = useLocalStorage<'light' | 'dark' | 'auto'>({
    key: options.key,
    defaultValue,
    getInitialValueInEffect: options.getInitialValueInEffect
  })
  const systemColorScheme = useSystemColorScheme(defaultValue === 'auto' ? undefined : defaultValue, {
    getInitialValueInEffect: options.getInitialValueInEffect
  })

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return {
    colorScheme,
    setColorScheme,
    systemColorScheme,
    toggleColorScheme
  }
}
