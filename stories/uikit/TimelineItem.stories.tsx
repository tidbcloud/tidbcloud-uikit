import type { Meta, StoryObj } from '@storybook/react'
import { TimelineItem } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof TimelineItem> = {
  title: 'Biz/components',
  component: TimelineItem,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof TimelineItem>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTimelineItem: Story = {
  render: () => <TimelineItem></TimelineItem>,
  args: {}
}
