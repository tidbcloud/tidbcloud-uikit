import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { RangeSlider } from '@tidbcloud/uikit'

type Story = StoryObj<typeof RangeSlider>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof RangeSlider> = {
  title: 'Primitive/Inputs/RangeSlider',
  component: RangeSlider,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <RangeSlider></RangeSlider>,
  args: {}
}
