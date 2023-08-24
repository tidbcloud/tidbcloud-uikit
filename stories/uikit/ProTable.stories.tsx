import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ProTable, MRT_ColumnDef } from '@tidbcloud/uikit/biz'

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
  parameters: {}
}

export default meta

function Demo({ ...args }) {
  const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' }
  ]

  const columns: MRT_ColumnDef<{ position: number; mass: number; symbol: string; name: string }>[] = [
    {
      header: 'Position',
      accessorKey: 'position'
    },
    {
      header: 'Name',
      accessorKey: 'name'
    },
    {
      header: 'Symbol',
      accessorKey: 'symbol'
    },
    {
      header: 'Mass',
      accessorKey: 'mass'
    }
  ]
  return <ProTable columns={columns} data={elements} {...args} />
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  parameters: {
    controls: { expanded: true }
  },
  render: ({ ...args }) => <Demo {...args} />,
  args: {
    withBorder: true,
    loading: false,
    enableStickyHeader: false,
    enableBottomToolbar: false,
    enableSorting: false
  },
  argTypes: {}
}
