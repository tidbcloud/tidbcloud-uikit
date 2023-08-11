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
  title: 'Primitive/Box',
  component: Box,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Box></Box>,
  args: {}
}
