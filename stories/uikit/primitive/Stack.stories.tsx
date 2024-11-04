import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Stack, Button } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Stack>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Stack> = {
  title: 'Primitive/Layout/Stack',
  component: Stack,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <Stack h={300} {...rest}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Stack>
  ),
  args: {},
  argTypes: {
    align: {
      options: ['stretch', 'flex-start', 'flex-end', 'center'],
      control: { type: 'select' }
    },
    gap: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' }
    },
    justify: {
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: { type: 'select' }
    }
  }
}
