import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Box } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Box>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Box> = {
  title: 'Primitive/Misc/Box',
  component: Box,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Box bg="pink">This is a box</Box>,
  args: {}
}

export function SystemProps() {
  return (
    <div style={{ padding: 40 }}>
      <Box
        bg={{
          base: 'red',
          xs: 'pink.5',
          sm: '#e5e5e5'
        }}
        pl={{ base: 30, md: 100, xs: 300 }}
        pt="xl"
        w={400}
        h={560}
        display="flex"
      >
        Some box
      </Box>
    </div>
  )
}

export function FontWeight() {
  return <Box fw={900}>900 fw</Box>
}
