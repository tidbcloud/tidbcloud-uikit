import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { BasicTable, BasicTableProps, MRT_ColumnDef } from '@tidbcloud/uikit/biz'

import { COLOR_LIST, SIZE_LIST } from '../constants'

type Story = StoryObj<typeof BasicTable>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof BasicTable> = {
  title: 'Biz/Basic Table',
  component: BasicTable,
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

  const columns: BasicTableProps['columns'] = [
    {
      Header: 'Position',
      accessor: 'position'
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Symbol',
      accessor: 'symbol'
    },
    {
      Header: 'Mass',
      accessor: 'mass'
    }
  ]
  // @ts-ignore
  return <BasicTable columns={columns} data={elements} {...args} />
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  parameters: {
    controls: { expanded: true }
  },
  render: ({ ...args }) => <Demo {...args} />,
  args: {
    striped: true,
    withBorder: true,
    withColumnBorders: true,
    highlightOnHover: true
  },
  argTypes: {
    captionSide: {
      options: ['top', 'bottom'],
      control: { type: 'select' }
    },
    verticalSpacing: {
      options: SIZE_LIST,
      control: { type: 'select' }
    },
    horizontalSpacing: {
      options: SIZE_LIST,
      control: { type: 'select' }
    }
  }
}
