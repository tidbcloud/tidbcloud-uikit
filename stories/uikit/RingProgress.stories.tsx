import type { Meta, StoryObj } from '@storybook/react'
import { RingProgress } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof RingProgress> = {
  title: 'Biz/components',
  component: RingProgress,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof RingProgress>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryRingProgress: Story = {
  render: () => <RingProgress></RingProgress>,
  args: {}
}
