import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ColorPicker } from '@tidbcloud/uikit'

import { COLOR_FORMAT, SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof ColorPicker>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ColorPicker> = {
  title: 'Primitive/Inputs/ColorPicker',
  component: ColorPicker,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => <ColorPicker {...props}></ColorPicker>,
  args: {
    format: 'hex',
    size: 'sm'
  },
  argTypes: {
    format: {
      control: 'select',
      options: COLOR_FORMAT
    },
    size: {
      control: 'select',
      options: SIZE_LIST
    }
  }
}
