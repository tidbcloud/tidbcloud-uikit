import { Table, TableProps } from '@mantine/core'
import React, { useMemo } from 'react'
// for Table logic Hooks
// https://github.com/tannerlinsley/react-table
import { useTable, Column, useExpanded, PluginHook } from 'react-table'

import { cellProps, headerProps } from '../helpers'

import { useStyles } from './BasicTable.styles'

// TableNoticeRow for empty table or table loading cases
export const TableNoticeRow = React.memo(({ colSpan, message }: { colSpan: number; message: React.ReactNode }) => (
  <tr className="tui-table__body-row">
    <td className="notice" colSpan={colSpan}>
      {message}
    </td>
  </tr>
))

export interface BasicTableProps<T extends object = {}> extends TableProps {
  columns: Column<T>[]
  data: T[]
  loading?: boolean
  emptyMessage?: string
  errorMessage?: string
  expanded?: boolean
  footerRow?: React.ReactNode
}

export const BasicTable = <T extends object = {}>({
  columns,
  data,
  loading,
  emptyMessage = 'No Data',
  errorMessage,
  expanded,
  footerRow,
  withBorder = true,
  highlightOnHover = true,
  className,
  ...tableProps
}: BasicTableProps<T>) => {
  // https://react-table.tanstack.com/docs/api/useTable
  const plugins: PluginHook<T>[] = []
  if (expanded) {
    plugins.push(useExpanded)
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
  const { classes, cx } = useStyles()

  return (
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
              <tr {...row.getRowProps()} data-row-depth={'depth' in row ? row.depth : ''}>
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
  )
}

export default BasicTable
