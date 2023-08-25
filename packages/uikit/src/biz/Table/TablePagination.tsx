import { Pagination, PaginationProps } from '../../primitive'
import { mergeStylesList } from '../../utils'

export interface TablePaginationProps extends PaginationProps {}

export const TablePagination: React.FC<TablePaginationProps> = ({ ...rest }) => {
  return (
    <Pagination
      {...rest}
      styles={mergeStylesList([
        (theme) => ({
          item: {
            border: 'none',
            color: theme.colors.gray[9],
            borderRadius: theme.defaultRadius,
            '&[data-active]': {
              color: theme.colors.gray[9],
              background: theme.colors.gray[3]
            }
          }
        }),
        rest.styles
      ])}
    />
  )
}
