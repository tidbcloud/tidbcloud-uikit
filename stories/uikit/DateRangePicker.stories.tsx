import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { DateRangePicker } from '@tidbcloud/uikit'

type Story = StoryObj<typeof DateRangePicker>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof DateRangePicker> = {
  title: 'Primitive/DateRangePicker',
  component: DateRangePicker,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <DateRangePicker></DateRangePicker>,
  args: {}
}
