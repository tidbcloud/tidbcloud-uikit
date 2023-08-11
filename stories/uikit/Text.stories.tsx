import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Text } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Text>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Text> = {
  title: 'Primitive/Text',
  component: Text,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Text></Text>,
  args: {}
}
