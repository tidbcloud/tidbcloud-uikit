import { ButtonStylesParams, CSSObject, MantineTheme } from '@mantine/core'

export const getButtonStyles = (theme: MantineTheme, params: ButtonStylesParams): Record<string, CSSObject> => {
  const hoverStyles =
    params.variant === 'subtle'
      ? theme.fn.hover({
          backgroundColor: 'transparent'
        })
      : {}

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
      ...hoverStyles
    }
  }
}
