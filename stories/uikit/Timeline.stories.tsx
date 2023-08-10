import type { Meta, StoryObj } from '@storybook/react'
import { Timeline } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Timeline> = {
  title: 'Biz/components',
  component: Timeline,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Timeline>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTimeline: Story = {
  render: () => <Timeline></Timeline>,
  args: {}
}
