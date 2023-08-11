import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Notification, Stack } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Notification>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Notification> = {
  title: 'Primitive/Notification',
  component: Notification,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo() {
  return (
    <Stack align="flex-start">
      <Notification title="Default notification">This is default notification with title and body</Notification>

      <Notification color="teal" title="Teal notification">
        This is teal notification with icon
      </Notification>

      <Notification color="red">Bummer! Notification without title</Notification>

      <Notification loading title="Uploading data to the server" disallowClose>
        Please wait until data is uploaded, you cannot close this notification yet
      </Notification>
    </Stack>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PrimaryDemo />,
  args: {}
}
