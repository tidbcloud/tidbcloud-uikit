import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Flex, Button } from '@tidbcloud/uikit'

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
  render: () => (
    <Flex mih={50} bg="rgba(0, 0, 0, .3)" gap="md" justify="flex-start" align="flex-start" direction="row" wrap="wrap">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  ),
  args: {}
}
