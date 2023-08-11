import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ActionIcon } from '@tidbcloud/uikit'

type Story = StoryObj<typeof ActionIcon>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ActionIcon> = {
  title: 'Primitive/ActionIcon',
  component: ActionIcon,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <ActionIcon></ActionIcon>,
  args: {}
}
