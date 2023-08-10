import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Rating> = {
  title: 'Biz/components',
  component: Rating,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Rating>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryRating: Story = {
  render: () => <Rating></Rating>,
  args: {}
}
