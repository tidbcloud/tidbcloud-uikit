import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Avatar, Group, Indicator } from '@tidbcloud/uikit'

import { COLOR_LIST, SIZE_LIST } from '../constants'

type Story = StoryObj<typeof Indicator>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Indicator> = {
  title: 'Primitive/Indicator',
  component: Indicator,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <Group position="center">
      <Indicator {...rest}>
        <Avatar size="lg" />
      </Indicator>
    </Group>
  ),
  args: {
    size: 12,
    inline: false,
    label: '',
    processing: false,
    dot: false,
    showZero: true
  },
  argTypes: {
    color: {
      options: COLOR_LIST,
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
