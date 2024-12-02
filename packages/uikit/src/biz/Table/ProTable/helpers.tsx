import { type BoxProps, useMantineTheme } from '@mantine/core'
import { isFunction } from 'lodash-es'
import { type MRT_TableOptions, type MRT_RowData, useMantineReactTable, MRT_TableInstance } from 'mantine-react-table'

import { IconSwitchVertical02, IconArrowUp, IconArrowDown } from '../../../icons/index.js'
import { mergeSxList } from '../../../utils/index.js'

import { ProTableExtraProps, ProTableOptions } from './types.js'

export function mergeMProps<P extends BoxProps | ((...args: unknown[]) => BoxProps)>(preProps: P, mProps?: P) {
  type PropsResult = Extract<P, { className?: string }> | undefined

  if (isFunction(preProps) || isFunction(mProps)) {
    const fn = (...args: unknown[]) => {
      const prePropsResult = isFunction(preProps) ? preProps(...args) : (preProps as NonNullable<PropsResult>)
      const mPropsResult = isFunction(mProps) ? mProps(...args) : (mProps as PropsResult)

      return {
        ...prePropsResult,
        ...mPropsResult,
        sx: mergeSxList([prePropsResult?.sx, mPropsResult?.sx])
      }
    }

    return fn as P
  }

  return {
    ...preProps,
    ...(mProps || {}),
    sx: mergeSxList([preProps.sx, mProps?.sx])
  }
}

export function mergeProTableProps<T extends Record<string, any>>(props: ProTableOptions<T>): ProTableOptions<T> {
  const {
    mantineTableProps = {},
    mantinePaperProps = {},
    mantineSkeletonProps = {},
    mantineTableBodyProps,
    mantineTableBodyCellProps = {},
    mantineBottomToolbarProps = {},
    withBorder = true,
    loading = false,
    enableExpanding = false,
    enableStickyHeader,
    emptyMessage,
    errorMessage,
    data,
    localization,
    state,
    ...rest
  } = props

  const theme = useMantineTheme()
  const mPaperProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantinePaperProps']>>(
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

  const mTableProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineTableProps']>>(
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

  const mTableBodyProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineTableBodyProps']>>((args) => {
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

  const mTableBodyCellProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineTableBodyCellProps']>>(() => {
    return {
      h: 48
    }
  }, mantineTableBodyCellProps)

  const mBottomToolbarProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineBottomToolbarProps']>>(
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

  const mTabelSkeletonProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineSkeletonProps']>>(
    {
      sx: (theme) => ({
        '&::after': {
          backgroundImage: `linear-gradient(90deg, ${theme.colors.gray[4]},  ${theme.colors.gray[3]},  ${theme.colors.gray[3]}, ${theme.colors.gray[4]})`
        }
      })
    },
    mantineSkeletonProps
  )

  return {
    enableColumnActions: false,
    enableColumnFilters: false,
    enableTopToolbar: false,
    enableSorting: false,
    enablePagination: false,
    mantinePaperProps: mPaperProps,
    mantineTableProps: mTableProps,
    mantineSkeletonProps: mTabelSkeletonProps,
    mantineTableBodyProps: mTableBodyProps,
    mantineBottomToolbarProps: mBottomToolbarProps,
    mantineTableBodyCellProps: mTableBodyCellProps,
    data,
    icons: {
      IconArrowsSort: () => <IconSwitchVertical02 size={14} />,
      IconSortAscending: () => <IconArrowUp size={14} />,
      IconSortDescending: () => <IconArrowDown size={14} />
    },
    localization: {
      noRecordsToDisplay: errorMessage ? errorMessage : emptyMessage ? emptyMessage : undefined,
      ...localization
    },
    state: {
      isLoading: loading,
      columnVisibility: { ...(enableExpanding ? { 'mrt-row-expand': false } : undefined), ...state?.columnVisibility },
      ...state
    },
    ...rest
  }
}

export function useProTable<T extends MRT_RowData>(
  options: ProTableOptions<T>
): MRT_TableInstance<T> & ProTableExtraProps {
  const props = mergeProTableProps(options)

  return { ...props, ...useMantineReactTable(props) }
}
