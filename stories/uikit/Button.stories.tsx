import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Button>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Button> = {
  title: 'Primitive/Button',
  component: Button,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Button></Button>,
  args: {}
}
