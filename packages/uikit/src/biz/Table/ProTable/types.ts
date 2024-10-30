import { BoxProps } from '@mantine/core'
import type { MRT_TableInstance, MRT_TableOptions, MRT_RowData } from 'mantine-react-table'

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

type TableInstanceProp<TData extends MRT_RowData> = {
  table: MRT_TableInstance<TData>
  pagination?: TablePaginationProps
}

export interface ProTableOptions<TData extends Record<string, any> = {}> extends MRT_TableOptions<TData> {
  withBorder?: boolean
  emptyMessage?: string
  errorMessage?: string
  loading?: boolean
  pagination?: TablePaginationProps
  wrapperProps?: BoxProps
}

export type ProTableProps<TData extends MRT_RowData> = Xor<TableInstanceProp<TData>, ProTableOptions<TData>>
