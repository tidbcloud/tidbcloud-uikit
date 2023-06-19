import { createStyles } from '@mantine/core'

interface StyleParams {
  sticky?: boolean
}

export const useStyles = createStyles((theme, _params: StyleParams, getRef) => {
  const { sticky } = _params
  return {
    table: {
      display: sticky ? 'block' : 'table',
      borderCollapse: 'separate',
      borderSpacing: 0,
      overflow: sticky ? 'auto' : undefined,
      borderRadius: theme.defaultRadius,
      tfoot: {
        'tr th': {
          backgroundColor: theme.colors.gray[0],
          ':first-of-type': {
            borderBottomLeftRadius: theme.defaultRadius
          },
          ':last-of-type': {
            borderBottomRightRadius: theme.defaultRadius
          }
        }
      }
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
