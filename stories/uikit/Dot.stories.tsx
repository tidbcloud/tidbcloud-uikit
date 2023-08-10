import type { Meta, StoryObj } from '@storybook/react'
import { Dot } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Dot> = {
  title: 'Biz/components',
  component: Dot,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Dot>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryDot: Story = {
  render: () => <Dot></Dot>,
  args: {}
}
