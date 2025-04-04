import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { PhoneInput } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof PhoneInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof PhoneInput> = {
  title: 'Biz/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  args: {
    label: 'Phone Number',
    description: 'Phone Number Input',
    placeholder: 'Please enter your phone number',
    error: '',
    country: 'US',
    required: true,
    disabled: false,
    withAsterisk: true,
    errorProps: {},
    labelProps: {}
  },
  argTypes: {
    label: {
      type: 'string'
    },
    error: {
      type: 'string'
    },
    placeholder: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    }
  }
}
