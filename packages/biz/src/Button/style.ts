import { ButtonStylesParams, CSSObject, MantineTheme } from '@mantine/core'

import { LegacyColors } from '../theme/colors'

export const getButtonStyles = (theme: MantineTheme, params: ButtonStylesParams): Record<string, CSSObject> => {
  const { color, variant, gradient } = params
  const colors = theme.fn.variant({ color, variant, gradient })

  switch (params.variant) {
    case 'filled': {
      if (!color) {
        colors.hover = LegacyColors.primaryColorHover
      }
      break
    }
    case 'subtle': {
      colors.hover = 'transparent'
      break
    }
  }

  const diffSizeStyles: Record<string, CSSObject> = {
    sm: {
      height: 40
    }
  }
  const matches = diffSizeStyles[params.size] || {}

  return {
    root: {
      fontWeight: 700,
      ...matches,
      ...theme.fn.hover({
        backgroundColor: colors.hover
      })
    }
  }
}
