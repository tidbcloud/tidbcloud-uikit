import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Chip } from '@tidbcloud/uikit'

import { COLOR_LIST, SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Chip>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Chip> = {
  title: 'Primitive/Inputs/Chip',
  component: Chip,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <Chip defaultChecked {...rest}>
      {rest.children || 'Tidb Cloud'}
    </Chip>
  ),
  args: {},
  argTypes: {
    checked: {
      control: 'boolean'
    },
    children: {
      control: 'text'
    },
    color: {
      control: 'select',
      options: COLOR_LIST
    },
    defaultChecked: {
      control: 'boolean'
    },
    id: {
      control: 'text'
    },
    onChange: {
      control: 'text'
    },
    radius: {
      control: 'select',
      options: SIZE_LIST
    },
    type: {
      control: 'select',
      options: ['checkbox', 'radio']
    },
    variant: {
      control: 'select',
      options: ['outlined', 'light', 'filled']
    },
    wrapperProps: {
      control: 'text'
    }
  }
}
