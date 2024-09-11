import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, params: { hasError?: boolean }) => {
  const { hasError } = params
  const invalidColor = theme.colors.red[4]
  const normalColor = theme.colors.carbon[5]

  const border = `1px solid ${hasError ? invalidColor : normalColor}`

  return {
    dropdownButton: {
      display: 'none'
    },
    container: {
      // marginTop: 8,
      '&.react-tel-input': {
        '.form-control': {
          backgroundColor: theme.colors.carbon[0],
          fontSize: 14,
          color: theme.colors.carbon[8],
          width: '100%',
          height: 40,
          minHeight: 40,
          lineHeight: '38px',
          borderRadius: theme.defaultRadius,
          padding: '0 12px',
          border,
          marginBottom: hasError ? 5 : undefined,
          outline: 'none',

          '::placeholder': {
            color: theme.colors.carbon[6]
          },
          '&:hover': {
            border
          },
          '&:focus': {
            borderColor: hasError ? invalidColor : theme.colors.carbon[9]
          },
          '&:disabled': {
            backgroundColor: theme.colors.carbon[2],
            color: theme.colors.carbon[8],
            cursor: 'not-allowed',
            opacity: 1
          }
        }
      }
    }
  }
})
