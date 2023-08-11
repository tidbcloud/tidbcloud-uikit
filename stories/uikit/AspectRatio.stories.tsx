import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { AspectRatio } from '@tidbcloud/uikit'

type Story = StoryObj<typeof AspectRatio>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof AspectRatio> = {
  title: 'Primitive/AspectRatio',
  component: AspectRatio,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <AspectRatio></AspectRatio>,
  args: {}
}
