import { MantineReactTable, MantineReactTableProps } from 'mantine-react-table'

import { IconSwitchVertical02, IconArrowUp, IconArrowDown } from '../../../icons/index.js'
import { Box, BoxProps, useMantineTheme } from '../../../primitive/index.js'
import { TablePagination, TablePaginationProps } from '../TablePagination.js'

import { mergeMProps } from './helpers.js'

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
  state,
  ...rest
}: ProTableProps<T>) => {
  const theme = useMantineTheme()
  const mPaperProps = mergeMProps<NonNullable<MantineReactTableProps<T>['mantinePaperProps']>>(
    {
      shadow: 'none',
      withBorder,
      sx: (theme) => ({
        backgroundColor: 'inherit',
        borderRadius: withBorder ? theme.defaultRadius : 0,
        borderColor: withBorder ? theme.colors.carbon[4] : 'transparent',
        overflow: 'hidden',
        transition: 'none',

        '& ::-webkit-scrollbar': enableStickyHeader
          ? {
              width: 0,
              height: 0
            }
          : undefined
      })
    },
    mantinePaperProps
  )

  const mTableProps = mergeMProps<NonNullable<MantineReactTableProps<T>['mantineTableProps']>>(
    {
      highlightOnHover: true,
      withColumnBorders: false,
      horizontalSpacing: 8,
      verticalSpacing: 8,
      sx: {
        color: 'inherit',
        thead: {
          tr: {
            boxShadow: 'none',

            th: {
              color: theme.colors.carbon[7],
              backgroundColor: theme.colors.carbon[2],
              fontWeight: 500
            }
          }
        },
        tbody: {
          tr: {
            transition: 'none',
            backgroundColor: theme.colors.carbon[0],
            color: theme.colors.carbon[8],

            '&:hover': {
              backgroundColor: `${theme.colors.carbon[3]} !important`
            },

            td: {
              borderColor: theme.colors.carbon[3]
            },

            ':last-of-type': {
              td: {
                borderBottom: 'none'
              }
            }
          }
        }
      }
    },
    mantineTableProps
  )

  const mTableBodyProps = mergeMProps<NonNullable<MantineReactTableProps<T>['mantineTableBodyProps']>>((args) => {
    if (!data?.length) {
      return {
        sx: {
          'tr td div': {
            maxWidth: `min(100vw, ${args?.table?.refs.tablePaperRef?.current?.clientWidth ?? '100%'})`
          }
        }
      }
    }

    return {}
  }, mantineTableBodyProps)

  const mBottomToolbarProps = mergeMProps<NonNullable<MantineReactTableProps<T>['mantineBottomToolbarProps']>>(
    {
      sx: (theme) => ({
        backgroundColor: 'inherit',
        transition: 'none',
        borderBottomLeftRadius: withBorder ? theme.defaultRadius : undefined,
        borderBottomRightRadius: withBorder ? theme.defaultRadius : undefined
      })
    },
    mantineBottomToolbarProps
  )

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
        mantinePaperProps={mPaperProps}
        mantineTableProps={mTableProps}
        mantineTableBodyProps={mTableBodyProps}
        mantineBottomToolbarProps={mBottomToolbarProps}
        mantinePaginationProps={{}}
        data={data}
        localization={{
          noRecordsToDisplay: errorMessage ? errorMessage : emptyMessage ? emptyMessage : undefined,
          ...localization
        }}
        icons={{
          IconArrowsSort: () => <IconSwitchVertical02 size={14} />,
          IconSortAscending: () => <IconArrowUp size={14} />,
          IconSortDescending: () => <IconArrowDown size={14} />
        }}
        state={{ isLoading: loading, ...state }}
        {...rest}
      />
      {!!pagination && <TablePagination size="sm" position="center" mt={16} {...pagination} />}
    </Box>
  )
}
