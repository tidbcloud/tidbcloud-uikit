import type { Meta, StoryObj } from '@storybook/react'
import { StarIcon } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof StarIcon> = {
  title: 'Biz/components',
  component: StarIcon,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof StarIcon>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryStarIcon: Story = {
  render: () => <StarIcon></StarIcon>,
  args: {}
}
