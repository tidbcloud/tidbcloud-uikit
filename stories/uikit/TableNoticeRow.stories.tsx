import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { TableNoticeRow } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof TableNoticeRow>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof TableNoticeRow> = {
  title: 'Biz/TableNoticeRow',
  component: TableNoticeRow,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <TableNoticeRow></TableNoticeRow>,
  args: {}
}
