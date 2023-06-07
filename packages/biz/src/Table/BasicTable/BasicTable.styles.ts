import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, _params, getRef) => {
  return {
    table: {
      borderCollapse: 'separate',
      borderSpacing: 0,
      borderRadius: theme.defaultRadius
    },
    thead: {
      'tr th': {
        backgroundColor: theme.colors.gray[0],
        ':first-of-type': {
          borderTopLeftRadius: theme.defaultRadius
        },
        ':last-of-type': {
          borderTopRightRadius: theme.defaultRadius
        }
      }
    }
  }
})
