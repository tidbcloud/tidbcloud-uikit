import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Checkbox, Stack } from '@tidbcloud/uikit'

import { COLOR_LIST, SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Checkbox>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Checkbox> = {
  title: 'Primitive/Checkbox',
  component: Checkbox,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => <Checkbox label="I agree to sell my privacy" {...rest} />,
  args: {},
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: COLOR_LIST
    },
    description: {
      control: 'text'
    },
    error: {
      control: 'text',
      description: 'Error message',
      table: {
        type: {
          summary: 'ReactNode'
        }
      }
    },
    icon: {
      control: 'text'
    },
    indeterminate: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right']
    },
    radius: {
      control: 'select',
      options: SIZE_LIST
    },
    size: {
      control: 'select',
      options: SIZE_LIST
    },
    transitionDuration: {
      control: 'number'
    },
    wrapperProps: {
      control: 'text'
    }
  }
}

export const Disabled: Story = {
  render: ({ ...rest }) => (
    <Stack>
      <Checkbox label="I agree to sell my privacy" {...rest} />
      <Checkbox label="I agree to sell my privacy" {...rest} disabled />
      <Checkbox label="I agree to sell my privacy" {...rest} disabled checked />
    </Stack>
  ),
  args: {}
}
