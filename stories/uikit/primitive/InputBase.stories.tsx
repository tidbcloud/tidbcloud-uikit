import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { InputBase } from '@tidbcloud/uikit'

type Story = StoryObj<typeof InputBase>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof InputBase> = {
  title: 'Primitive/Inputs/InputBase',
  component: InputBase,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <InputBase></InputBase>,
  args: {}
}
