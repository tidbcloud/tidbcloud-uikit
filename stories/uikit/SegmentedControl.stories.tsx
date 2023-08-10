import type { Meta, StoryObj } from '@storybook/react'
import { SegmentedControl } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof SegmentedControl> = {
  title: 'Biz/components',
  component: SegmentedControl,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof SegmentedControl>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimarySegmentedControl: Story = {
  render: () => <SegmentedControl></SegmentedControl>,
  args: {}
}
