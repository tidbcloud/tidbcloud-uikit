import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Progress } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Progress>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Progress> = {
  title: 'Primitive/Progress',
  component: Progress,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Progress></Progress>,
  args: {}
}
