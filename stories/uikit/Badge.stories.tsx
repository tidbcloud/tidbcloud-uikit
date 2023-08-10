import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Badge> = {
  title: 'Biz/components',
  component: Badge,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Badge>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryBadge: Story = {
  render: () => <Badge></Badge>,
  args: {}
}
