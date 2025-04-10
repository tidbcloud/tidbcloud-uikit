import { MRT_Cell, MRT_Row, MRT_Column, MRT_TableInstance } from 'mantine-react-table'
import { ReactNode } from 'react'

import { IconChevronDown, IconChevronRight } from '../../../icons/index.js'
import { Box } from '../../../primitive/index.js'

interface CellProps<TData extends Record<string, any>> {
  cell: MRT_Cell<TData>
  renderedCellValue: number | string | ReactNode
  column: MRT_Column<TData>
  row: MRT_Row<TData>
  table: MRT_TableInstance<TData>
}

export const renderExpandCell = <T extends Record<string, any> = {}>({ row, cell, ...rest }: CellProps<T>) => {
  const canExpand = row.getCanExpand()
  const value = cell.getValue() as any as React.ReactNode

  const paddingLeft = row.depth * 20

  const icon = row.getIsExpanded() ? <IconChevronDown size={18} /> : <IconChevronRight size={18} />
  return (
    <Box
      sx={() => ({
        paddingLeft: canExpand ? paddingLeft : paddingLeft + 6,
        display: 'flex',
        alignItems: 'center',
        cursor: canExpand ? 'pointer' : undefined
      })}
      onClick={row.getToggleExpandedHandler()}
    >
      {canExpand && <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>{icon}</Box>}
      {value}
    </Box>
  )
}
