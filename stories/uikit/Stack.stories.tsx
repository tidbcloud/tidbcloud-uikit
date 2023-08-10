import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Stack> = {
  title: 'Biz/components',
  component: Stack,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Stack>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryStack: Story = {
  render: () => <Stack></Stack>,
  args: {}
}
