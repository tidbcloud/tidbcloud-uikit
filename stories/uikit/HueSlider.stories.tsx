import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { HueSlider } from '@tidbcloud/uikit'

type Story = StoryObj<typeof HueSlider>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof HueSlider> = {
  title: 'Primitive/HueSlider',
  component: HueSlider,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <HueSlider></HueSlider>,
  args: {}
}
