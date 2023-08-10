import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Avatar> = {
  title: 'Biz/components',
  component: Avatar,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Avatar>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryAvatar: Story = {
  render: () => <Avatar></Avatar>,
  args: {}
}
