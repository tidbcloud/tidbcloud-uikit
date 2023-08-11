import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Portal } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Portal>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Portal> = {
  title: 'Primitive/Portal',
  component: Portal,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Portal></Portal>,
  args: {}
}
