import 'mantine-react-table/styles.css'
import { type MRT_TableInstance, MantineReactTable, type MRT_RowData } from 'mantine-react-table'

import { Box } from '../../../primitive/index.js'
import { ProTablePagination } from '../TablePagination.js'

import { useProTable } from './helpers.js'
import { ProTableProps, TableInstanceProp } from './types.js'

const isTableInstanceProp = <TData extends MRT_RowData>(
  props: ProTableProps<TData>
): props is TableInstanceProp<TData> => (props as TableInstanceProp<TData>).table !== undefined

export const ProTable = <T extends Record<string, any> = {}>(props: ProTableProps<T>) => {
  const isInstance = isTableInstanceProp(props)
  let table = useProTable<T>(isInstance ? { columns: [], data: [] } : props)
  if (isInstance) {
    table = props.table
  }

  return (
    <Box {...props.wrapperProps}>
      {/***
       * see https://v2.mantine-react-table.com/docs/api/table-options
       * ***/}
      <MantineReactTable<T> table={table} />
      {table.options.enablePagination && <ProTablePagination table={table} {...props.pagination} />}
    </Box>
  )
}
