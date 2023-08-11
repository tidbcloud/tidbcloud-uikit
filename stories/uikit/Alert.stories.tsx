import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Alert } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Alert>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Alert> = {
  title: 'Primitive/Alert',
  component: Alert,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <Alert title="Bummer!" color="red">
      Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
    </Alert>
  ),
  args: {}
}
