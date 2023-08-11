import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Dialog } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Dialog>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Dialog> = {
  title: 'Primitive/Dialog',
  component: Dialog,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Dialog></Dialog>,
  args: {}
}
