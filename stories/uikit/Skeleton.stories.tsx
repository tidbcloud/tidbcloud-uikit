import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Skeleton> = {
  title: 'Biz/components',
  component: Skeleton,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Skeleton>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimarySkeleton: Story = {
  render: () => <Skeleton></Skeleton>,
  args: {}
}
