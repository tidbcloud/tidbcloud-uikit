import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Transition } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Transition>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Transition> = {
  title: 'Primitive/Transition',
  component: Transition,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Transition></Transition>,
  args: {}
}
