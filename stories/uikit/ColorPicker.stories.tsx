import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ColorPicker } from '@tidbcloud/uikit'

type Story = StoryObj<typeof ColorPicker>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ColorPicker> = {
  title: 'Primitive/ColorPicker',
  component: ColorPicker,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <ColorPicker></ColorPicker>,
  args: {}
}
