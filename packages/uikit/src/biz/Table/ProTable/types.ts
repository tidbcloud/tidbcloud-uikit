import type { MRT_TableInstance, MRT_TableOptions, MRT_RowData } from 'mantine-react-table'

import { BoxProps } from '../../../primitive/index.js'
import { TablePaginationProps } from '../TablePagination.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & unknown

type Xor<A, B> =
  | Prettify<
      A & {
        [k in keyof B]?: never
      }
    >
  | Prettify<
      B & {
        [k in keyof A]?: never
      }
    >

export type TableInstanceProp<TData extends MRT_RowData> = {
  table: MRT_TableInstance<TData>
}

export interface ProTableExtraProps {
  withBorder?: boolean
  emptyMessage?: string
  errorMessage?: string
  loading?: boolean
  pagination?: TablePaginationProps
  wrapperProps?: BoxProps
}

export interface ProTableOptions<TData extends Record<string, any> = {}>
  extends MRT_TableOptions<TData>,
    ProTableExtraProps {}

export type ProTableProps<TData extends MRT_RowData> = Xor<TableInstanceProp<TData>, ProTableOptions<TData>>
