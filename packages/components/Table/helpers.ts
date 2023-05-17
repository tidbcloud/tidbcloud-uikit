// cell align:
// amount and other numerical value right-aligned
// textual value and action cell is left-aligned (as default)
// headers are aligned with their data

import { TableCellProps, TableHeaderProps } from 'react-table'

// don’t use center alignment as much as possible
export const getStyles = (
  props: Partial<TableHeaderProps> | Partial<TableCellProps>,
  align = 'left' as const,
  width?: string | number,
  minWidth?: string | number,
  maxWidth?: string | number
) => {
  return [
    props,
    {
      style: {
        textAlign: align,
        width: width || 150,
        minWidth: minWidth || 30,
        maxWidth: maxWidth
      }
    }
  ]
}

export const headerProps = (props: Partial<TableHeaderProps>, { column }: any) =>
  getStyles(props, column?.align, column?.width, column?.minWidth, column?.maxWidth)

export const cellProps = (props: Partial<TableCellProps>, { cell }: any) => {
  const column = cell.column
  return getStyles(props, column?.align, column?.width, column?.minWidth, column?.maxWidth)
}
