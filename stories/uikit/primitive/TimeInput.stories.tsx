import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { TimeInput } from '@tidbcloud/uikit'

type Story = StoryObj<typeof TimeInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof TimeInput> = {
  title: 'Primitive/Dates/TimeInput',
  component: TimeInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <TimeInput></TimeInput>,
  args: {}
}
