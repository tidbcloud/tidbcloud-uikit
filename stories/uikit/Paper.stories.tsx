import type { Meta, StoryObj } from '@storybook/react'
import { Paper } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Paper> = {
  title: 'Biz/components',
  component: Paper,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Paper>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryPaper: Story = {
  render: () => <Paper></Paper>,
  args: {}
}
