import { Box, useMantineTheme, BoxProps } from '@mantine/core'
import { Icon } from '../../../icons'

import { mergeSx } from '../../../utils'

import { MantineReactTable, MantineReactTableProps } from 'mantine-react-table'

import { TablePagination, TablePaginationProps } from '../TablePagination'

export * from './Expand'
export * from 'mantine-react-table'

export interface ProTableProps<TData extends Record<string, any> = {}> extends MantineReactTableProps<TData> {
  withBorder?: boolean
  emptyMessage?: string
  errorMessage?: string
  loading?: boolean
  pagination?: TablePaginationProps
  wrapperProps?: BoxProps
}

export const ProTable = <T extends Record<string, any> = {}>({
  mantineTableProps = {},
  mantinePaperProps = {},
  mantineTableBodyProps,
  mantineBottomToolbarProps = {},
  wrapperProps = {},
  pagination,
  withBorder = true,
  loading = false,
  enableStickyHeader,
  enablePagination = false,
  enableBottomToolbar = false,
  enableSorting = false,
  emptyMessage,
  errorMessage,
  data,
  localization,
  ...rest
}: ProTableProps<T>) => {
  const theme = useMantineTheme()

  if (typeof mantineTableProps === 'object') {
    mantineTableProps.sx = mergeSx(
      theme,
      () => ({
        color: 'inherit',
        thead: {
          tr: {
            boxShadow: 'none'
          }
        },
        'thead th': {
          backgroundColor: 'inherit'
        },
        tr: {
          transition: 'none',
          backgroundColor: 'inherit',
          ':last-of-type': {
            td: {
              borderBottom: 'none'
            }
          }
        }
      }),
      mantineTableProps.sx
    )
  }

  if (typeof mantinePaperProps === 'object') {
    mantinePaperProps.sx = mergeSx(
      theme,
      {
        backgroundColor: 'inherit',
        borderRadius: withBorder ? theme.defaultRadius : 0,
        overflow: 'hidden',
        transition: 'none',

        '& ::-webkit-scrollbar': enableStickyHeader
          ? {
              width: 0,
              height: 0
            }
          : undefined
      },
      mantinePaperProps.sx
    )
  }

  return (
    <Box {...wrapperProps}>
      <MantineReactTable<T>
        enableColumnActions={false}
        enableColumnFilters={false}
        enableTopToolbar={false}
        enableStickyHeader={enableStickyHeader}
        // enable pagination should turn on bottom toolbar
        enableBottomToolbar={enableBottomToolbar}
        enablePagination={enablePagination}
        enableSorting={enableSorting}
        mantinePaperProps={{
          shadow: 'none',
          withBorder,
          ...mantinePaperProps
        }}
        mantineTableProps={{
          highlightOnHover: true,
          withColumnBorders: false,
          horizontalSpacing: 8,
          verticalSpacing: 8,
          ...mantineTableProps
        }}
        mantineBottomToolbarProps={{
          ...mantineBottomToolbarProps,
          sx: {
            backgroundColor: 'inherit',
            transition: 'none',
            borderBottomLeftRadius: withBorder ? theme.defaultRadius : undefined,
            borderBottomRightRadius: withBorder ? theme.defaultRadius : undefined
          }
        }}
        mantineTableBodyProps={(table) => {
          const bodyProps =
            typeof mantineTableBodyProps === 'function' ? mantineTableBodyProps(table) : mantineTableBodyProps

          // fix empty message align when first load
          if (!data?.length) {
            return {
              sx: mergeSx(
                theme,
                {
                  tr: {
                    td: {
                      div: {
                        maxWidth: `min(100vw, ${table?.table?.refs.tablePaperRef?.current?.clientWidth ?? '100%'})`
                      }
                    }
                  }
                },
                bodyProps?.sx
              )
            }
          }
          return { ...bodyProps }
        }}
        mantinePaginationProps={{}}
        data={data}
        localization={{
          noRecordsToDisplay: loading
            ? 'Loading...'
            : errorMessage
            ? errorMessage
            : emptyMessage
            ? emptyMessage
            : undefined,
          ...localization
        }}
        icons={{
          IconArrowsSort: () => <Icon name="SwitchVertical02" size={14} />,
          IconSortAscending: () => <Icon name="ArrowUp" size={14} />,
          IconSortDescending: () => <Icon name="ArrowDown" size={14} />
        }}
        {...rest}
      />
      {!!pagination && <TablePagination size="sm" position="right" mt={16} {...pagination} />}
    </Box>
  )
}
