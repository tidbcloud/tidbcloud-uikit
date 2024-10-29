import { Pagination, PaginationProps } from '../../primitive/index.js'
import { mergeStylesList } from '../../utils/index.js'

export interface TablePaginationProps extends PaginationProps {}

export const TablePagination = ({ ...rest }: TablePaginationProps) => {
  return (
    <Pagination
      {...rest}
      styles={mergeStylesList([
        (theme) => ({
          control: {
            border: 'none',
            color: theme.colors.carbon[9],
            borderRadius: theme.defaultRadius,
            '&[data-active]': {
              color: theme.colors.carbon[9],
              background: theme.colors.carbon[4]
            }
          }
        }),
        rest.styles
      ])}
    />
  )
}
