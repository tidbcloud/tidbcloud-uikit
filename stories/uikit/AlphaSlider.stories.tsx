import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { AlphaSlider } from '@tidbcloud/uikit'

type Story = StoryObj<typeof AlphaSlider>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof AlphaSlider> = {
  title: 'Primitive/AlphaSlider',
  component: AlphaSlider,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <AlphaSlider></AlphaSlider>,
  args: {}
}
