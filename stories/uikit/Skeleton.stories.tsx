import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Skeleton } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Skeleton>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Skeleton> = {
  title: 'Primitive/Skeleton',
  component: Skeleton,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Skeleton></Skeleton>,
  args: {}
}
