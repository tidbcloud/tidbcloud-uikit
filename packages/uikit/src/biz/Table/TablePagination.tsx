import { CSSObject } from '@mantine/emotion'

import { Pagination, PaginationProps } from '../../primitive/index.js'
import { mergeStylesList } from '../../utils/index.js'

export interface TablePaginationProps extends PaginationProps {
  position?: 'left' | 'right' | 'center' | 'apart'
}

export const TablePagination = ({ position = 'center', ...rest }: TablePaginationProps) => {
  const justifyContentMaps: Record<NonNullable<TablePaginationProps['position']>, string> = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
    apart: 'space-evenly'
  }

  return (
    <Pagination
      {...rest}
      styles={mergeStylesList([
        (theme) => ({
          root: {
            display: 'flex',
            justifyContent: justifyContentMaps[position]
          },
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
