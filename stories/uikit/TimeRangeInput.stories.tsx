import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { TimeRangeInput } from '@tidbcloud/uikit'

type Story = StoryObj<typeof TimeRangeInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof TimeRangeInput> = {
  title: 'Primitive/TimeRangeInput',
  component: TimeRangeInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <TimeRangeInput></TimeRangeInput>,
  args: {}
}
