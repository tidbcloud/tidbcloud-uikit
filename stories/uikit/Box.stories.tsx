import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Box> = {
  title: 'Biz/components',
  component: Box,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Box>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryBox: Story = {
  render: () => <Box></Box>,
  args: {}
}
