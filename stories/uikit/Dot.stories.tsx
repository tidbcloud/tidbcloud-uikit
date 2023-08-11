import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Dot } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof Dot>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Dot> = {
  title: 'Biz/Dot',
  component: Dot,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Dot></Dot>,
  args: {}
}
