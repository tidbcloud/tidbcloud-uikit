import type { Meta, StoryObj } from '@storybook/react'
import { Indicator } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Indicator> = {
  title: 'Biz/components',
  component: Indicator,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Indicator>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryIndicator: Story = {
  render: () => <Indicator></Indicator>,
  args: {}
}
