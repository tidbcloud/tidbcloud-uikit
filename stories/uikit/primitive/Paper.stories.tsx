import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Box, Paper, Text } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Paper>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Paper> = {
  title: 'Primitive/Paper',
  component: Paper,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => (
    <Box p="md">
      <Paper {...props}>
        <Text>Paper is the most basic ui component</Text>
        <Text>Use it to create cards, dropdowns, modals and other components that require background with shadow</Text>
      </Paper>
    </Box>
  ),
  args: {
    shadow: 'md',
    p: 'md'
  },
  argTypes: {
    shadow: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    p: {
      name: 'padding',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
}
