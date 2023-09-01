import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Group } from '@tidbcloud/uikit'
import { DotBadge } from '@tidbcloud/uikit/biz'

import { COLOR_LIST } from '../../constants'

type Story = StoryObj<typeof DotBadge>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof DotBadge> = {
  title: 'Biz/DotBadge',
  component: DotBadge,
  tags: ['autodocs'],
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  args: {
    color: 'red',
    children: 'Failed'
  },
  argTypes: {
    color: {
      options: COLOR_LIST,
      control: {
        type: 'select'
      }
    }
  }
}

export const OtherColors: Story = {
  render: () => (
    <Group>
      <DotBadge>Success</DotBadge>
      <DotBadge color="red">Failed</DotBadge>
      <DotBadge color="blue">Running</DotBadge>
      <DotBadge color="yellow">Warning</DotBadge>
      <DotBadge color="gray">Other</DotBadge>
    </Group>
  )
}
