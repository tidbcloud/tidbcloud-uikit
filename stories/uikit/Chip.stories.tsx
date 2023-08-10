import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Chip> = {
  title: 'Biz/components',
  component: Chip,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Chip>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryChip: Story = {
  render: () => <Chip></Chip>,
  args: {}
}
