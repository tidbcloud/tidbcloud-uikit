import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Alert, AlertProps } from '@tidbcloud/uikit'

import { COLOR_LIST, SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Alert>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Alert> = {
  title: 'Primitive/Feedback/Alert',
  component: Alert,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo({ children, ...rest }: AlertProps) {
  return (
    <Alert title="Bummer!" color="red" {...rest}>
      {children}
    </Alert>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => <PrimaryDemo {...rest} />,
  args: {
    title: 'Bummer!',
    withCloseButton: false,
    closeButtonLabel: 'Close',
    children: 'Something terrible happened! You made a mistake and there is no going back, your data was lost forever!'
  },
  argTypes: {
    color: {
      options: COLOR_LIST,
      control: {
        type: 'select'
      }
    },
    variant: {
      options: ['filled', 'outline', 'light'],
      control: {
        type: 'select'
      }
    },
    radius: {
      options: SIZE_LIST,
      control: {
        type: 'select'
      }
    }
  }
}
