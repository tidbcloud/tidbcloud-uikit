import { defaultVariantColorsResolver, getPrimaryShade, parseThemeColor, VariantColorsResolver } from '@mantine/core'

export const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)
  const { variant, theme } = input
  const parsedColor = parseThemeColor({
    color: input.color || theme.primaryColor,
    theme
  })
  const primaryShade = getPrimaryShade(theme, 'light')

  if (input.variant === 'light') {
    if (parsedColor.isThemeColor) {
      if (parsedColor.shade === undefined) {
        return {
          background: `var(--mantine-color-${parsedColor.color}-1)`,
          hover: `var(--mantine-color-${parsedColor.color}-2)`,
          color: `var(--mantine-color-${parsedColor.color}-${primaryShade})`,
          border: `1px solid transparent`
        }
      }

      return {
        background: `var(--mantine-color-${parsedColor.color}-1)`,
        hover: `var(--mantine-color-${parsedColor.color}-2)`,
        color: `var(--mantine-color-${parsedColor.color}-${Math.min(parsedColor.shade, primaryShade)})`,
        border: `1px solid transparent`
      }
    }

    return {
      background: `var(--mantine-color-${theme.primaryColor}-1)`,
      hover: `var(--mantine-color-${theme.primaryColor}-2)`,
      color: `var(--mantine-color-${theme.primaryColor}-${primaryShade})`,
      border: `1px solid transparent`
    }
  }

  if (variant === 'outline') {
    if (parsedColor.isThemeColor) {
      if (parsedColor.shade === undefined) {
        return {
          background: 'transparent',
          hover: `var(--mantine-color-${parsedColor.color}-2)`,
          color: `var(--mantine-color-${parsedColor.color}-${primaryShade})`,
          border: `1px solid var(--mantine-color-${parsedColor.color}-${primaryShade})`
        }
      }

      return {
        background: 'transparent',
        hover: `var(--mantine-color-${parsedColor.color}-2)`,
        color: `var(--mantine-color-${parsedColor.color}-${Math.min(parsedColor.shade, primaryShade)})`,
        border: `1px solid var(--mantine-color-${parsedColor.color}-${primaryShade})`
      }
    }

    return {
      background: 'transparent',
      hover: `var(--mantine-color-${theme.primaryColor}-2)`,
      color: `var(--mantine-color-${theme.primaryColor}-${primaryShade})`,
      border: `1px solid var(--mantine-color-${theme.primaryColor}-${primaryShade})`
    }
  }

  if (variant === 'subtle') {
    if (parsedColor.isThemeColor) {
      if (parsedColor.shade === undefined) {
        return {
          background: 'transparent',
          hover: `var(--mantine-color-${parsedColor.color}-2)`,
          color: `var(--mantine-color-${parsedColor.color}-${primaryShade})`,
          border: `1px solid transparent`
        }
      }

      return {
        background: 'transparent',
        hover: `var(--mantine-color-${parsedColor.color}-2)`,
        color: `var(--mantine-color-${parsedColor.color}-${Math.min(parsedColor.shade, primaryShade)})`,
        border: `1px solid transparent`
      }
    }

    return {
      background: 'transparent',
      hover: `var(--mantine-color-${theme.primaryColor}-2)`,
      color: `var(--mantine-color-${theme.primaryColor}-${primaryShade})`,
      border: `1px solid transparent`
    }
  }

  if (variant === 'transparent') {
    if (parsedColor.isThemeColor) {
      if (parsedColor.shade === undefined) {
        return {
          background: 'transparent',
          hover: 'transparent',
          color: `var(--mantine-color-${parsedColor.color}-${primaryShade})`,
          border: `1px solid transparent`
        }
      }

      return {
        background: 'transparent',
        hover: 'transparent',
        color: `var(--mantine-color-${parsedColor.color}-${Math.min(parsedColor.shade, primaryShade)})`,
        border: `1px solid transparent`
      }
    }

    return {
      background: 'transparent',
      hover: 'transparent',
      color: `var(--mantine-color-${theme.primaryColor}-${primaryShade})`,
      border: `1px solid transparent`
    }
  }

  if (variant === 'white') {
    if (parsedColor.isThemeColor) {
      if (parsedColor.shade === undefined) {
        return {
          background: 'var(--mantine-color-white)',
          hover: 'transparent',
          color: `var(--mantine-color-${parsedColor.color}-${primaryShade})`,
          border: `1px solid transparent`
        }
      }

      return {
        background: 'var(--mantine-color-white)',
        hover: 'transparent',
        color: `var(--mantine-color-${parsedColor.color}-${Math.min(parsedColor.shade, primaryShade)})`,
        border: `1px solid transparent`
      }
    }

    return {
      background: 'var(--mantine-color-white)',
      hover: 'transparent',
      color: `var(--mantine-color-${theme.primaryColor}-${primaryShade})`,
      border: `1px solid transparent`
    }
  }

  if (variant === 'default') {
    if (parsedColor.isThemeColor) {
      if (parsedColor.shade === undefined) {
        return {
          background: `var(--mantine-color-${parsedColor.color}-2)`,
          hover: `var(--mantine-color-${parsedColor.color}-3)`,
          color: `var(--mantine-color-${parsedColor.color}-${parsedColor.color === 'carbon' ? primaryShade + 1 : primaryShade})`,
          border: `1px solid var(--mantine-color-${parsedColor.color}-${parsedColor.color === 'carbon' ? 5 : 4})`
        }
      }

      return {
        background: `var(--mantine-color-${parsedColor.color}-2)`,
        hover: `var(--mantine-color-${parsedColor.color}-3)`,
        color: `var(--mantine-color-${parsedColor.color}-${Math.min(parsedColor.shade, parsedColor.color === 'carbon' ? primaryShade + 1 : primaryShade)})`,
        border: `1px solid var(--mantine-color-${parsedColor.color}-${parsedColor.color === 'carbon' ? 5 : 4})`
      }
    }

    return {
      background: `var(--mantine-color-${theme.primaryColor}-2)`,
      hover: `var(--mantine-color-${theme.primaryColor}-3)`,
      color: `var(--mantine-color-${theme.primaryColor}-${theme.primaryColor === 'carbon' ? primaryShade + 1 : primaryShade})`,
      border: `1px solid var(--mantine-color-${theme.primaryColor}-${theme.primaryColor === 'carbon' ? 5 : 4})`
    }
  }

  return defaultResolvedColors
}
