import { MantineTheme } from '@mantine/core'

export function getColorIndexInfo(color: string, theme: MantineTheme) {
  if (typeof color === 'string' && color.includes('.')) {
    const [splittedColor, _splittedShade] = color.split('.')
    const splittedShade = parseInt(_splittedShade, 10)

    if (splittedColor in theme.colors && splittedShade >= 0 && splittedShade < 10) {
      return { isSplittedColor: true, key: splittedColor, shade: splittedShade }
    }
  }

  return { isSplittedColor: false }
}

/**
 * https://github.com/mantinedev/mantine/blob/5.10.5/src/mantine-styles/src/theme/functions/fns/variant/variant.ts
 */
export function getVariant(theme: MantineTheme) {
  const getThemeColor = theme.fn.themeColor
  const getPrimaryShade = theme.fn.primaryShade
  const getGradient = theme.fn.gradient

  const variant: MantineTheme['fn']['variant'] = ({ variant, color: colorProp, gradient, primaryFallback }) => {
    const color = colorProp as string
    const colorInfo = getColorIndexInfo(color, theme)

    switch (variant) {
      case 'light': {
        return {
          border: 'transparent',
          background: getThemeColor(color, 1, primaryFallback, false),
          color: getThemeColor(color, getPrimaryShade()),
          hover: getThemeColor(color, 2, primaryFallback, false)
        }
      }

      case 'subtle': {
        return {
          border: 'transparent',
          background: 'transparent',
          color: getThemeColor(color, getPrimaryShade()),
          hover: getThemeColor(color, 2, primaryFallback, false)
        }
      }

      case 'outline': {
        return {
          border: getThemeColor(color, getPrimaryShade()),
          background: 'transparent',
          color: getThemeColor(color, getPrimaryShade()),
          hover: getThemeColor(color, 2, primaryFallback, false)
        }
      }

      case 'default': {
        return {
          border: theme.colors.carbon[5],
          background: theme.colorScheme === 'dark' ? theme.colors.carbon[2] : theme.white,
          color: theme.colors.carbon[8],
          hover: theme.colors.carbon[3]
        }
      }

      case 'white': {
        return {
          border: 'transparent',
          background: theme.white,
          color: getThemeColor(color, getPrimaryShade()),
          hover: 'transparent'
        }
      }

      case 'transparent': {
        return {
          border: 'transparent',
          background: 'transparent',
          color: getThemeColor(color, getPrimaryShade()),
          hover: 'transparent'
        }
      }

      case 'gradient': {
        return {
          background: getGradient(gradient),
          color: theme.white,
          border: 'transparent',
          hover: 'transparent'
        }
      }

      default: {
        const _primaryShade = getPrimaryShade()
        const _shade = colorInfo.isSplittedColor ? colorInfo.shade! : _primaryShade
        const _color = colorInfo.isSplittedColor ? colorInfo.key! : color

        return {
          border: 'transparent',
          background: getThemeColor(_color, _shade, primaryFallback),
          color: theme.white,
          hover: getThemeColor(_color, _shade === 9 ? 8 : _shade + 1)
        }
      }
    }
  }

  return variant
}
