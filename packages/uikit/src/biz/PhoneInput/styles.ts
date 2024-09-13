import { CSSObject, createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, params: { hasError?: boolean }) => {
  const { hasError } = params

  const invalidColor = theme.fn.variant({
    variant: 'filled',
    color: 'red'
  }).background

  const invalidStyles: CSSObject = {
    borderColor: theme.colors.red[4],
    color: invalidColor,

    '&:hover': {
      borderColor: theme.colors.red[4]
    },
    '&:focus': {
      borderColor: theme.colors.red[4]
    }
  }

  return {
    dropdownButton: {
      display: 'none'
    },
    container: {
      // marginTop: 8,
      '&.react-tel-input': {
        '.form-control': {
          ...theme.fn.fontStyles(),
          // see more https://github.com/mantinedev/mantine/blob/v6/src/mantine-core/src/Input/Input.styles.ts#L30-L187
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.carbon[0] : theme.white,
          transition: 'border-color 100ms ease',

          fontSize: 14,
          color: theme.colors.carbon[8],
          width: '100%',
          height: 40,
          minHeight: 40,
          lineHeight: '38px',
          borderRadius: theme.defaultRadius,
          padding: '0 12px',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: theme.colors.carbon[4],
          marginBottom: hasError ? 5 : undefined,
          outline: 'none',

          '&:hover': {
            borderColor: theme.colors.carbon[5]
          },

          '&:focus, &:focus-within': {
            borderColor: theme.colors.carbon[9]
          },

          '&::placeholder': {
            ...theme.fn.placeholderStyles(),
            opacity: 1
          },
          ...(hasError ? invalidStyles : undefined)
        }
      }
    }
  }
})
