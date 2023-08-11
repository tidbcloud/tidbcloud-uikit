import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Avatar, Group, Indicator } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Indicator>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Indicator> = {
  title: 'Primitive/Indicator',
  component: Indicator,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <Group position="center">
      <Indicator>
        <Avatar size="lg" />
      </Indicator>
    </Group>
  ),
  args: {}
}
