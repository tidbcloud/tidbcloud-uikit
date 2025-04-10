import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { MRT_ColumnDef, ProTable, renderExpandCell, useProTable } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof ProTable>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ProTable> = {
  title: 'Biz/Pro Table',
  component: ProTable,
  decorators: [decorator],
  tags: ['autodocs'],
  parameters: {}
}

export default meta

const data = [
  {
    position: 6,
    mass: 12.011,
    symbol: 'C',
    name: 'Carbon',
    subRows: [
      {
        id: 2,
        name: 'Jane Doe',
        position: 6,
        mass: 12.011,
        symbol: 'C'
      }
    ]
  },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' }
]

const columns: MRT_ColumnDef<{}>[] = [
  {
    header: 'Position',
    accessorKey: 'position',
    Cell: renderExpandCell,
    footer: 'Position',
    enableResizing: true
  },
  {
    header: 'Name',
    accessorKey: 'name',
    footer: 'Position'
  },
  {
    header: 'Symbol',
    accessorKey: 'symbol',
    footer: 'Symbol'
  },
  {
    header: 'Mass',
    accessorKey: 'mass',
    mantineTableHeadCellProps: {
      align: 'right'
    },
    mantineTableBodyCellProps: {
      align: 'right'
    },
    mantineTableFooterCellProps: {
      align: 'right'
    },
    footer: 'Mass'
  }
]

//store pagination state in your own state

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: (args) => {
    let table = useProTable(args.table ? { columns: [], data: [] } : args)
    if (args.table) {
      table = args.table
    }
    return <ProTable table={table} />
  },
  parameters: {
    controls: { expanded: true }
  },
  args: {
    withBorder: true,
    loading: false,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enableBottomToolbar: false,
    enableExpanding: true,
    enableRowVirtualization: true,
    enableColumnPinning: true,
    enableColumnResizing: true,
    enableSorting: false,
    columns,
    emptyMessage: 'No data',
    mantineTableBodyCellProps: {
      h: 48
    },
    // mantineTableContainerProps: { sx: { maxHeight: '400px' } },
    data,
    layoutMode: 'semantic',
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5
      }
    },
    state: {
      columnVisibility: {},
      columnPinning: { left: ['position'] }
    },
    enablePagination: true,
    rowCount: 0,
    manualPagination: false,
    onPaginationChange: (page) => {
      console.log('onPaginationChange Called')
    },
    mantineTableProps: {
      highlightOnHover: true
    },
    wrapperProps: {
      mt: 0
    },
    pagination: {
      showRowsPerPage: true,
      showTotal: true,
      onChange: (pageIndex) => {
        console.log(pageIndex)
      },
      localization: {
        total: 'Total'
      }
    }
  },
  argTypes: {}
}
