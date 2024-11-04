import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Notification, Stack } from '@tidbcloud/uikit'

import { COLOR_LIST, SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Notification>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Notification> = {
  title: 'Primitive/Feedback/Notification',
  component: Notification,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo({ ...rest }) {
  return (
    <Stack align="flex-start">
      <Notification title="Default notification">This is default notification with title and body</Notification>

      <Notification color="teal" title="Teal notification">
        This is teal notification with icon
      </Notification>

      <Notification color="red">Bummer! Notification without title</Notification>

      <Notification loading title="Uploading data to the server" withCloseButton={false}>
        Please wait until data is uploaded, you cannot close this notification yet
      </Notification>

      <Notification {...rest} />
    </Stack>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => <PrimaryDemo {...rest} />,
  args: {
    loading: false,
    title: 'Success!',
    children: 'Data was successfully uploaded to the server',
    withCloseButton: false
  },
  argTypes: {
    color: {
      options: COLOR_LIST,
      control: { type: 'select' }
    },
    radius: {
      options: SIZE_LIST,
      control: { type: 'select' }
    }
  }
}
