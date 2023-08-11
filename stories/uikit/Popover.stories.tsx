import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Popover } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Popover>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Popover> = {
  title: 'Primitive/Popover',
  component: Popover,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Popover></Popover>,
  args: {}
}
