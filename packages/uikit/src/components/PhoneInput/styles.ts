import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, params: { hasError?: boolean }) => {
  const primaryShade = theme.fn.primaryShade()
  const { hasError } = params
  const invalidColor = theme.colors.red[primaryShade]
  const normalColor = theme.colors.cyan[primaryShade]

  const border = `1px solid ${hasError ? invalidColor : normalColor}`

  return {
    dropdownButton: {
      display: 'none'
    },
    container: {
      // marginTop: 8,
      '&.react-tel-input': {
        '.form-control': {
          // see more https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/Input/Input.styles.ts#LL40C23-L40C89
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

          fontSize: 14,
          color: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.black,
          width: '100%',
          height: 40,
          minHeight: 40,
          lineHeight: '38px',
          borderRadius: theme.defaultRadius,
          padding: '0 12px',
          border: hasError ? `1px solid ${invalidColor}` : `1px solid ${theme.colors.gray[4]}`,
          marginBottom: hasError ? 5 : undefined,
          outline: 'none',

          '::placeholder': {
            ...theme.fn.placeholderStyles(),
            ...(hasError
              ? {
                  opacity: 1,
                  color: invalidColor
                }
              : undefined)
          },
          '&:hover': {
            border
          },
          '&:focus': {
            border
          }
        }
      }
    }
  }
})
