import { CSSObject, EmotionSx } from '@mantine/emotion'
import { isFunction, merge } from 'lodash-es'
import { type MRT_TableOptions, type MRT_RowData, useMantineReactTable, MRT_TableInstance } from 'mantine-react-table'

import { IconSwitchVertical02, IconArrowUp, IconArrowDown } from '../../../icons/index.js'
import { type BoxProps, useMantineTheme } from '../../../primitive/index.js'
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
    mantineTableContainerProps = {},
    mantineSkeletonProps = {},
    mantineTableBodyProps,
    mantineTableHeadCellProps = {},
    mantineTableBodyCellProps = {},
    mantineTableBodyRowProps = {},
    mantineBottomToolbarProps = {},
    mantineTableFooterCellProps = {},
    mantineTableFooterRowProps = {},
    mantineTableFooterProps = {},
    mantineLoadingOverlayProps = {},
    enablePagination = false,
    enableBottomToolbar,
    layoutMode,
    withBorder = true,
    loading = false,
    enableExpanding = false,
    enableRowVirtualization = false,
    enableColumnPinning = false,
    pagination,
    enableStickyHeader,
    enableStickyFooter,
    emptyMessage,
    errorMessage,
    data,
    localization,
    state,
    rowCount,
    ...rest
  } = props

  const theme = useMantineTheme()
  const mPaperProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantinePaperProps']>>(
    {
      shadow: 'none',
      withBorder,
      sx: (theme) => ({
        backgroundColor: 'transparent',
        borderRadius: withBorder ? theme.defaultRadius : 0,
        borderColor: withBorder ? theme.colors.carbon[4] : 'transparent',
        overflow: 'hidden',
        transition: 'none'
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
              fontWeight: 500,
              '&[data-column-pinned]': {
                backgroundColor: theme.colors.carbon[2]
              }
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

  const mTableContainerProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineTableContainerProps']>>(
    {
      sx: {
        backgroundColor: 'transparent'
      }
    },
    mantineTableContainerProps
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

  const columnPinningThSx: CSSObject = {
    '&[data-column-pinned][data-column-pinned="left"][data-last-left-pinned]': {
      boxShadow: 'none',
      '& + th': {
        boxShadow: '6px 0 6px -6px color-mix(in srgb, var(--mantine-color-gray-outline), transparent 50%) inset'
      }
    },
    '&[data-column-pinned][data-column-pinned="right"][data-first-right-pinned]': {}
  }

  const mTableHeaderCellProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineTableHeadCellProps']>>(() => {
    return {
      sx: mergeSxList([
        {
          '.mrt-table-head-sort-button': {
            height: 'auto',
            width: 'auto',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            minWidth: 20,
            minHeight: 20
          },
          '.mrt-table-head-cell-resize-handle': {
            marginRight: -7
          }
        },
        enableColumnPinning ? (columnPinningThSx as CSSObject) : undefined
      ])
    }
  }, mantineTableHeadCellProps)

  const mTableBodyCellProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineTableBodyCellProps']>>(() => {
    return {
      h: 48
    }
  }, mantineTableBodyCellProps)

  const columnPinningTdSx: CSSObject = {
    "td[data-column-pinned][data-column-pinned='left'][data-last-left-pinned]": {
      '&::before': {
        boxShadow: 'none'
      },
      '& + td': {
        boxShadow: '6px 0 6px -6px color-mix(in srgb, var(--mantine-color-gray-outline), transparent 50%) inset'
      }
    },
    "td[data-column-pinned][data-column-pinned='right'][data-first-right-pinned]": {
      '&::before': {}
    }
  }

  const mTableBodyRowProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineTableBodyRowProps']>>(() => {
    return {
      sx: mergeSxList([
        {
          '&:where([data-with-row-border]):not(:last-of-type)': {
            td: {
              borderBottom:
                enableRowVirtualization || (layoutMode && layoutMode !== 'semantic') ? 'none !important' : undefined
            }
          },
          '&[data-hover]': {
            '&:hover': {
              '--mrt-row-hover-background-color': theme.colors.carbon[3]
            }
          },
          "&:not([data-striped], [data-striped='false'])": {
            backgroundColor: theme.colors.carbon[0]
          },
          '&:not([data-selected], [data-row-pinned]) td[data-column-pinned]::before': {
            backgroundColor: 'transparent'
          }
        },
        enableColumnPinning ? columnPinningTdSx : undefined
      ])
    }
  }, mantineTableBodyRowProps)

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

  const mLoadingOverlayProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineLoadingOverlayProps']>>(
    () => ({
      visible: false
    }),
    mantineLoadingOverlayProps
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

  const mTableFooterCellProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineTableFooterCellProps']>>(
    {
      p: 8,
      sx: {
        ...(enableColumnPinning ? columnPinningThSx : undefined)
      }
    },
    mantineTableFooterCellProps
  )

  const mTableFooterRowProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineTableFooterRowProps']>>(
    {
      sx: { borderBottom: 'none', outline: enableStickyFooter ? 'none' : undefined }
    },
    mantineTableFooterRowProps
  )

  const mTableFooterProps = mergeMProps<NonNullable<MRT_TableOptions<T>['mantineTableFooterProps']>>(
    {
      sx: { outline: enableStickyFooter ? 'none !important' : undefined }
    },
    mantineTableFooterProps
  )

  const withPagination = (!!pagination || enablePagination) && ((rowCount ?? 0) || (pagination?.total ?? 0)) > 0

  return {
    enableColumnActions: false,
    enableColumnFilters: false,
    enableTopToolbar: false,
    enableSorting: false,
    enableColumnPinning,
    rowCount,
    enablePagination: withPagination,
    enableBottomToolbar: withPagination || enableBottomToolbar,
    renderBottomToolbar: () => {
      return <></>
    },
    enableExpanding,
    enableStickyHeader,
    enableStickyFooter,
    enableRowVirtualization,
    mantinePaperProps: mPaperProps,
    mantineTableProps: mTableProps,
    mantineTableHeadCellProps: mTableHeaderCellProps,
    mantineSkeletonProps: mTabelSkeletonProps,
    mantineLoadingOverlayProps: mLoadingOverlayProps,
    mantineTableBodyProps: mTableBodyProps,
    mantineTableContainerProps: mTableContainerProps,
    mantineBottomToolbarProps: mBottomToolbarProps,
    mantineTableBodyRowProps: mTableBodyRowProps,
    mantineTableBodyCellProps: mTableBodyCellProps,
    mantineTableFooterCellProps: mTableFooterCellProps,
    mantineTableFooterRowProps: mTableFooterRowProps,
    mantineTableFooterProps: mTableFooterProps,
    layoutMode,
    data,
    icons: {
      IconArrowsSort: (props: any) => <IconSwitchVertical02 size={14} {...props} />,
      IconSortAscending: (props: any) => <IconArrowUp size={14} {...props} />,
      IconSortDescending: (props: any) => <IconArrowDown size={14} {...props} />
    },
    localization: {
      noRecordsToDisplay: errorMessage ? errorMessage : emptyMessage ? emptyMessage : undefined,
      ...localization
    },
    state: {
      isLoading: loading,
      ...state,
      columnVisibility: { ...(enableExpanding ? { 'mrt-row-expand': false } : undefined), ...state?.columnVisibility }
    },
    pagination,
    ...rest
  }
}

export function useProTable<T extends MRT_RowData>(
  options: ProTableOptions<T>
): MRT_TableInstance<T> & ProTableExtraProps {
  const props = mergeProTableProps(options)

  return { ...props, ...useMantineReactTable(props) }
}
