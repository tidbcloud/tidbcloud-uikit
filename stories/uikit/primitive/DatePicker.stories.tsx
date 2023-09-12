import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { DatePicker } from '@tidbcloud/uikit'

type Story = StoryObj<typeof DatePicker>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof DatePicker> = {
  title: 'Primitive/DatePicker',
  component: DatePicker,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <DatePicker></DatePicker>,
  args: {}
}
