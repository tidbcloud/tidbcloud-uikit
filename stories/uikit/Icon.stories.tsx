import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@tidbcloud/uikit/icons'
import React from 'react'

const meta: Meta<typeof Icon> = {
  title: 'Biz/icons',
  component: Icon,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Icon>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryIcon: Story = {
  render: () => <Icon></Icon>,
  args: {}
}
