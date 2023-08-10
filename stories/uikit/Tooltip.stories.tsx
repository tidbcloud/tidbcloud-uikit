import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Tooltip> = {
  title: 'Biz/components',
  component: Tooltip,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Tooltip>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTooltip: Story = {
  render: () => <Tooltip></Tooltip>,
  args: {}
}
