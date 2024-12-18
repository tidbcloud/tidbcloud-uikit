import { type MRT_RowData, MRT_TableInstance } from 'mantine-react-table'

import { Pagination, PaginationProps, ActionIcon, Box, Group, Select, Text } from '../../primitive/index.js'
import { mergeStylesList } from '../../utils/index.js'

export interface TablePaginationProps extends PaginationProps {
  position?: 'left' | 'right' | 'center' | 'apart'
}

export const parseFromValuesOrFunc = <T, U>(fn: ((arg: U) => T) | T | undefined, arg: U): T | undefined =>
  fn instanceof Function ? fn(arg) : fn

export const TablePagination = ({ position = 'center', ...rest }: TablePaginationProps) => {
  const justifyContentMaps: Record<
    NonNullable<TablePaginationProps['position']>,
    React.CSSProperties['justifyContent']
  > = {
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

const defaultRowsPerPage = [5, 10, 15, 20, 25, 30, 50, 100].map((x) => x.toString())

interface Props<TData extends MRT_RowData> extends Partial<PaginationProps> {
  position?: 'bottom' | 'top'
  table: MRT_TableInstance<TData>
}

export const ProTablePagination = <TData extends MRT_RowData>({
  position = 'bottom',
  table,
  ...props
}: Props<TData>) => {
  const {
    getPrePaginationRowModel,
    getState,
    options: {
      icons: { IconChevronLeft, IconChevronLeftPipe, IconChevronRight, IconChevronRightPipe },
      localization,
      mantinePaginationProps,
      paginationDisplayMode,
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
  const showFirstLastPageButtons = numberOfPages > 2
  const firstRowIndex = pageIndex * pageSize
  const lastRowIndex = Math.min(pageIndex * pageSize + pageSize, totalRowCount)

  const {
    rowsPerPageOptions = defaultRowsPerPage,
    showRowsPerPage = true,
    withEdges = showFirstLastPageButtons,
    ...rest
  } = paginationProps ?? {}

  return (
    <Box>
      {paginationProps?.showRowsPerPage !== false && (
        <Group gap="xs">
          <Text id="rpp-label">{localization.rowsPerPage}</Text>
          <Select
            allowDeselect={false}
            aria-labelledby="rpp-label"
            data={paginationProps?.rowsPerPageOptions ?? defaultRowsPerPage}
            onChange={(value: null | string) => setPageSize(+(value as string))}
            value={pageSize.toString()}
          />
        </Group>
      )}
      {paginationDisplayMode === 'pages' ? (
        <Pagination
          firstIcon={IconChevronLeftPipe}
          lastIcon={IconChevronRightPipe}
          nextIcon={IconChevronRight}
          onChange={(newPageIndex) => setPageIndex(newPageIndex - 1)}
          previousIcon={IconChevronLeft}
          total={numberOfPages}
          value={pageIndex + 1}
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
      ) : paginationDisplayMode === 'default' ? (
        <>
          <Text>{`${lastRowIndex === 0 ? 0 : (firstRowIndex + 1).toLocaleString()}-${lastRowIndex.toLocaleString()} ${
            localization.of
          } ${totalRowCount.toLocaleString()}`}</Text>
          <Group gap={6}>
            {withEdges && (
              <ActionIcon
                aria-label={localization.goToFirstPage}
                color="gray"
                disabled={pageIndex <= 0}
                onClick={() => setPageIndex(0)}
                variant="subtle"
              >
                <IconChevronLeftPipe />
              </ActionIcon>
            )}
            <ActionIcon
              aria-label={localization.goToPreviousPage}
              color="gray"
              disabled={pageIndex <= 0}
              onClick={() => setPageIndex(pageIndex - 1)}
              variant="subtle"
            >
              <IconChevronLeft />
            </ActionIcon>
            <ActionIcon
              aria-label={localization.goToNextPage}
              color="gray"
              disabled={lastRowIndex >= totalRowCount}
              onClick={() => setPageIndex(pageIndex + 1)}
              variant="subtle"
            >
              <IconChevronRight />
            </ActionIcon>
            {withEdges && (
              <ActionIcon
                aria-label={localization.goToLastPage}
                color="gray"
                disabled={lastRowIndex >= totalRowCount}
                onClick={() => setPageIndex(numberOfPages - 1)}
                variant="subtle"
              >
                <IconChevronRightPipe />
              </ActionIcon>
            )}
          </Group>
        </>
      ) : null}
    </Box>
  )
}
