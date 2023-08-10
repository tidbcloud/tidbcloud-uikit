import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Typography> = {
  title: 'Biz/components',
  component: Typography,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Typography>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTypography: Story = {
  render: () => <Typography></Typography>,
  args: {}
}
