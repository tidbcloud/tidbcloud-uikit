import { MantineTheme, CSSObject, InputStylesParams } from '@mantine/core'

export const getInputStyles = (theme: MantineTheme, params: InputStylesParams): Record<string, CSSObject> => {
  const diffSizeStyles: Record<string, Record<string, CSSObject>> = {
    sm: {
      label: {
        lineHeight: '20px',
        marginBottom: 8
      },
      input: {
        height: 40,
        minHeight: 40,
        lineHeight: '38px'
      }
    }
  }

  const matches = diffSizeStyles[params.size] || { label: {}, input: {} }

  return {
    label: matches.label,
    input: {
      ...matches.input,
      color: theme.colors.gray[8],
      '&:disabled': {
        opacity: 1
      }
    },
    invalid: {
      '&:hover': {
        borderColor: theme.colors.red[5]
      },
      '&:focus': {
        borderColor: theme.colors.red[5]
      }
    }
  }
}
