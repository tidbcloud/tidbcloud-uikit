import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { CalendarBase } from '@tidbcloud/uikit'

type Story = StoryObj<typeof CalendarBase>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof CalendarBase> = {
  title: 'Primitive/CalendarBase',
  component: CalendarBase,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <CalendarBase></CalendarBase>,
  args: {}
}
