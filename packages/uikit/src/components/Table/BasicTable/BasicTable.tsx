import { Table, TableProps, Box } from '@mantine/core'
import React, { useMemo } from 'react'
// for Table logic Hooks
// https://github.com/tannerlinsley/react-table
import { useTable, Column, useExpanded, PluginHook } from 'react-table'
import { useSticky } from 'react-table-sticky'

import { cellProps, headerProps } from '../helpers'
import { TablePagination, TablePaginationProps } from '../TablePagination'

import { useStyles } from './BasicTable.styles'

// TableNoticeRow for empty table or table loading cases
export const TableNoticeRow = React.memo(
  ({ colSpan, message, className }: { colSpan: number; message: React.ReactNode; className?: string }) => (
    <tr className={className}>
      <td className="notice" style={{ textAlign: 'center' }} colSpan={colSpan}>
        {message}
      </td>
    </tr>
  )
)

export interface BasicTableProps<T extends object = {}> extends TableProps {
  columns: Column<T>[]
  data: T[]
  loading?: boolean
  emptyMessage?: string
  errorMessage?: string
  // use for row expanded
  expanded?: boolean
  // use for sticky table
  sticky?: boolean
  footerRow?: React.ReactNode

  pagination?: TablePaginationProps
}

export const BasicTable = <T extends object = {}>({
  columns,
  data,
  loading,
  emptyMessage = 'No Data',
  errorMessage,
  expanded,
  sticky,
  footerRow,
  withBorder = true,
  highlightOnHover = true,
  className,
  pagination,
  ...tableProps
}: BasicTableProps<T>) => {
  // https://react-table.tanstack.com/docs/api/useTable
  const plugins: PluginHook<T>[] = []
  if (expanded) {
    plugins.push(useExpanded)
  }
  if (sticky) {
    plugins.push(useSticky)
  }
  const { rows, headerGroups, prepareRow } = useTable<T>(
    {
      columns,
      data: data || []
    },
    ...plugins
  )

  // memoized rows to optimize performance of ReactTable component
  const memoRows = useMemo(() => rows, [rows])
  const colSpan = headerGroups[0].headers?.length
  const { classes, cx } = useStyles({ sticky })

  return (
    <Box>
      <Table
        withBorder={withBorder}
        highlightOnHover={highlightOnHover}
        className={cx(classes.table, className)}
        {...tableProps}
      >
        <thead className={cx(classes.thead)}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return <th {...column.getHeaderProps(headerProps)}>{column.render('Header')}</th>
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {loading ? (
            <TableNoticeRow colSpan={colSpan} message="Loading..." />
          ) : errorMessage ? (
            <TableNoticeRow colSpan={colSpan} message={errorMessage} />
          ) : rows.length ? (
            memoRows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} data-row-depth={'depth' in row ? (row as any).depth : ''}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps(cellProps)}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })
          ) : (
            <TableNoticeRow colSpan={colSpan} message={emptyMessage} />
          )}
        </tbody>
        {loading ? null : footerRow}
      </Table>
      {!!pagination && <TablePagination mt={16} position="right" {...pagination} />}
    </Box>
  )
}

export default BasicTable
