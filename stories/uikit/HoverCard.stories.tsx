import type { Meta, StoryObj } from '@storybook/react'
import { HoverCard } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof HoverCard> = {
  title: 'Biz/components',
  component: HoverCard,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof HoverCard>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryHoverCard: Story = {
  render: () => <HoverCard></HoverCard>,
  args: {}
}
