import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Paper } from '@tidbcloud/uikit'

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
  render: () => <Paper></Paper>,
  args: {}
}
