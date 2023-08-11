import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Chip } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Chip>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Chip> = {
  title: 'Primitive/Chip',
  component: Chip,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Chip></Chip>,
  args: {}
}
