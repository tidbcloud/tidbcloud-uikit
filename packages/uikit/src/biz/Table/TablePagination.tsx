import { type MRT_RowData, MRT_TableInstance } from 'mantine-react-table'

import { Pagination, PaginationProps, Select, Text, Flex, ComboboxData, FlexProps } from '../../primitive/index.js'
import { mergeStylesList } from '../../utils/index.js'

export const parseFromValuesOrFunc = <T, U>(fn: ((arg: U) => T) | T | undefined, arg: U): T | undefined =>
  fn instanceof Function ? fn(arg) : fn

const defaultRowsPerPage = [5, 10, 15, 20, 25, 30, 50, 100].map((x) => ({ value: x.toString(), label: `${x} / page` }))

interface Localization {
  total?: string
}
export interface TablePaginationProps extends Partial<PaginationProps> {
  rowsPerPageOptions?: ComboboxData
  showRowsPerPage?: boolean
  showTotal?: boolean
  wrapperProps?: FlexProps
  /***
   * @deprecated please use wrapper props
   */
  position?: 'left' | 'right' | 'center' | 'apart'

  /***
   * @deprecated please use mantine-react-table -> state.pagination.pageIndex
   */
  value?: number
  /***
   * @deprecated please use mantine-react-table -> rowCount
   */
  total?: number
  localization?: Localization
}

interface ProTablePaginationProps<TData extends MRT_RowData> extends TablePaginationProps {
  table: MRT_TableInstance<TData>
}

export const ProTablePagination = <TData extends MRT_RowData>({ table, ...props }: ProTablePaginationProps<TData>) => {
  const {
    getPrePaginationRowModel,
    getState,
    options: {
      icons: { IconChevronLeft, IconChevronRight },
      mantinePaginationProps,
      rowCount
    },
    setPageIndex,
    setPageSize
  } = table
  const {
    pagination: { pageIndex = 0, pageSize = 10 }
  } = getState()

  const paginationProps = {
    ...parseFromValuesOrFunc(mantinePaginationProps, {
      table
    }),
    ...props
  }

  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length
  const numberOfPages = Math.ceil(totalRowCount / pageSize)
  const showFirstLastPageButtons = (paginationProps?.total || numberOfPages) > 2

  const {
    rowsPerPageOptions = defaultRowsPerPage,
    showRowsPerPage = false,
    showTotal = false,
    withEdges = showFirstLastPageButtons,
    localization,
    ...rest
  } = paginationProps ?? {}

  return (
    <Flex
      align="center"
      justify={!showTotal && !showRowsPerPage ? 'center' : showTotal ? 'space-between' : 'flex-end'}
      mt="xs"
      {...paginationProps.wrapperProps}
    >
      {paginationProps.showTotal && (
        <Flex align="center" gap={2}>
          <Text c="carbon.7">{localization?.total || 'Total:'} </Text>
          <Text c="carbon.8">{totalRowCount.toLocaleString()}</Text>
        </Flex>
      )}
      <Flex align="center" gap="xs">
        <Pagination
          nextIcon={IconChevronRight}
          onChange={paginationProps.onChange ?? ((newPageIndex) => setPageIndex(newPageIndex - 1))}
          previousIcon={IconChevronLeft}
          total={paginationProps?.total ?? numberOfPages}
          value={paginationProps.value ?? pageIndex + 1}
          withEdges={withEdges}
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
          {...rest}
        />
        {showRowsPerPage && (
          <Select
            w={114}
            size="sm"
            allowDeselect={false}
            aria-labelledby="rpp-label"
            data={paginationProps?.rowsPerPageOptions ?? defaultRowsPerPage}
            onChange={(value: null | string) => setPageSize(+(value as string))}
            value={pageSize.toString()}
          />
        )}
      </Flex>
    </Flex>
  )
}
