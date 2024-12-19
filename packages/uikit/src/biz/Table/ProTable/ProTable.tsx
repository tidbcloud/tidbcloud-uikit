import 'mantine-react-table/styles.css'
import { MRT_TableInstance, MantineReactTable } from 'mantine-react-table'

import { Box } from '../../../primitive/index.js'
import { ProTablePagination } from '../TablePagination.js'

import { useProTable } from './helpers.js'
import { ProTableProps } from './types.js'

export const ProTable = <T extends Record<string, any> = {}>(props: ProTableProps<T>) => {
  let table: MRT_TableInstance<T>
  if (props.table) {
    table = props.table
  } else {
    table = useProTable(props)
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
