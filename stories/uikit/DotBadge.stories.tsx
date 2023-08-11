import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { DotBadge } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof DotBadge>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof DotBadge> = {
  title: 'Biz/DotBadge',
  component: DotBadge,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <DotBadge></DotBadge>,
  args: {}
}
