import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ColorInput } from '@tidbcloud/uikit'

import { COLOR_FORMAT } from '../constants'

type Story = StoryObj<typeof ColorInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ColorInput> = {
  title: 'Primitive/ColorInput',
  component: ColorInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => <ColorInput {...props}></ColorInput>,
  args: {
    format: 'hex',
    disallowInput: false,
    withPreview: true,
    withEyeDropper: true,
    disabled: false
  },
  argTypes: {
    format: {
      control: 'select',
      options: COLOR_FORMAT
    },
    disallowInput: {
      control: 'boolean'
    },
    withPreview: {
      control: 'boolean'
    },
    withEyeDropper: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
}
