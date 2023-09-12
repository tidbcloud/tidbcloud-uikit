import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Space, Text } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Space>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Space> = {
  title: 'Primitive/Space',
  component: Space,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <>
      <Text>First line</Text>
      <Space h="md" {...rest} />
      <Text>Second line</Text>
    </>
  ),
  args: {},
  argTypes: {
    h: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' }
    }
  }
}
