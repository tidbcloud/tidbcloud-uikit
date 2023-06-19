import { Pagination, PaginationProps } from '@mantine/core'
import { mergeStyles } from '../../utils'

export interface TablePaginationProps extends PaginationProps {}

export const TablePagination: React.FC<TablePaginationProps> = ({ ...rest }) => {
  return (
    <Pagination
      {...rest}
      styles={(theme, params) =>
        mergeStyles(
          theme,
          params,
          {
            item: {
              border: 'none',
              color: theme.colors.gray[9],
              borderRadius: theme.defaultRadius,
              '&[data-active]': {
                color: theme.colors.gray[9],
                background: theme.colors.gray[3]
              }
            }
          },
          rest.styles || {}
        )
      }
    />
  )
}
