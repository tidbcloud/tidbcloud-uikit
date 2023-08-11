import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Carousel } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Carousel>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Carousel> = {
  title: 'Primitive/Carousel',
  component: Carousel,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Carousel></Carousel>,
  args: {}
}
