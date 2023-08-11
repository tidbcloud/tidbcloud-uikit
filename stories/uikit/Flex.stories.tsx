import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Flex } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Flex>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Flex> = {
  title: 'Primitive/Flex',
  component: Flex,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Flex></Flex>,
  args: {}
}
