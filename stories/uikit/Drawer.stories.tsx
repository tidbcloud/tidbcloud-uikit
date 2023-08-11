import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Drawer } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Drawer>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Drawer> = {
  title: 'Primitive/Drawer',
  component: Drawer,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Drawer></Drawer>,
  args: {}
}
