import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Calendar } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Calendar>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Calendar> = {
  title: 'Primitive/Calendar',
  component: Calendar,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Calendar></Calendar>,
  args: {}
}
