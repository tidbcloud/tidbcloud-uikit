import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { FocusTrap } from '@tidbcloud/uikit'

type Story = StoryObj<typeof FocusTrap>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof FocusTrap> = {
  title: 'Primitive/FocusTrap',
  component: FocusTrap,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <FocusTrap></FocusTrap>,
  args: {}
}
