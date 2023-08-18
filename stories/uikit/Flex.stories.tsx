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
  render: ({ ...rest }) => (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
      {...rest}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  ),
  args: {},
  argTypes: {
    align: {
      options: ['stretch', 'flex-start', 'flex-end', 'center'],
      control: { type: 'select' }
    },
    justify: {
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: { type: 'select' }
    },
    direction: {
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: { type: 'select' }
    },
    wrap: {
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      control: { type: 'select' }
    }
  }
}
