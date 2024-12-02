import 'mantine-react-table/styles.css'
import { MantineReactTable } from 'mantine-react-table'

import { Box } from '../../../primitive/index.js'
import { TablePagination } from '../TablePagination.js'

import { mergeProTableProps } from './helpers.js'
import { ProTableProps } from './types.js'

export const ProTable = <T extends Record<string, any> = {}>(props: ProTableProps<T>) => {
  const { wrapperProps, pagination, ...restProps } = 'table' in props ? props : mergeProTableProps(props)

  return (
    <Box {...wrapperProps}>
      {/***
       * see https://v2.mantine-react-table.com/docs/api/table-options
       * ***/}
      <MantineReactTable<T> {...restProps} />
      {!!pagination && <TablePagination size="sm" position="center" mt={16} {...pagination} />}
    </Box>
  )
}
