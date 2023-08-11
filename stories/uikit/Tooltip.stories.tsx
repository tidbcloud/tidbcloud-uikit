import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Tooltip } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Tooltip>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Tooltip> = {
  title: 'Primitive/Tooltip',
  component: Tooltip,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Tooltip></Tooltip>,
  args: {}
}
