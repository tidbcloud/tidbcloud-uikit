import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { HoverCard } from '@tidbcloud/uikit'

type Story = StoryObj<typeof HoverCard>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof HoverCard> = {
  title: 'Primitive/HoverCard',
  component: HoverCard,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <HoverCard></HoverCard>,
  args: {}
}
