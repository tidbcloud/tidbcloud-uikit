import type { Meta, StoryObj } from '@storybook/react'
import { DotBadge } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof DotBadge> = {
  title: 'Biz/components',
  component: DotBadge,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof DotBadge>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryDotBadge: Story = {
  render: () => <DotBadge></DotBadge>,
  args: {}
}
