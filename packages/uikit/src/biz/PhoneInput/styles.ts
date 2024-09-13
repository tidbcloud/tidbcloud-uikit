import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, params: { hasError?: boolean }) => {
  const { hasError = true } = params

  const invalidColor = theme.fn.variant({
    variant: 'filled',
    color: 'red'
  }).background

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
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          transition: 'border-color 100ms ease',
          '&:focus, &:focus-within': {
            ...theme.focusRingStyles.inputStyles(theme)
          },

          fontSize: 14,
          color: hasError ? invalidColor : theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          width: '100%',
          height: 40,
          minHeight: 40,
          lineHeight: '38px',
          borderRadius: theme.defaultRadius,
          padding: '0 12px',
          border: hasError
            ? `1px solid ${invalidColor}`
            : `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]}`,
          marginBottom: hasError ? 5 : undefined,
          outline: 'none',

          '::placeholder': {
            ...theme.fn.placeholderStyles(),
            opacity: 1,
            ...(hasError
              ? {
                  opacity: 1,
                  color: invalidColor
                }
              : undefined)
          },
          '&:hover': {
            borderColor: hasError ? theme.colors.red[6] : undefined
          }
        }
      }
    }
  }
})
