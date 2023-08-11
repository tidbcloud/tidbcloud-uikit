import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Timeline } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Timeline>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Timeline> = {
  title: 'Primitive/Timeline',
  component: Timeline,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Timeline></Timeline>,
  args: {}
}
