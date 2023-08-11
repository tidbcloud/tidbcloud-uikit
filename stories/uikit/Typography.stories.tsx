import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Typography } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof Typography>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Typography> = {
  title: 'Biz/Typography',
  component: Typography,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Typography></Typography>,
  args: {}
}
