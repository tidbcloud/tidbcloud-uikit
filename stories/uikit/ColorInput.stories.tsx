import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ColorInput } from '@tidbcloud/uikit'

type Story = StoryObj<typeof ColorInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ColorInput> = {
  title: 'Primitive/ColorInput',
  component: ColorInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <ColorInput></ColorInput>,
  args: {}
}
