import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Group } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Group>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Group> = {
  title: 'Primitive/Group',
  component: Group,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Group></Group>,
  args: {}
}
