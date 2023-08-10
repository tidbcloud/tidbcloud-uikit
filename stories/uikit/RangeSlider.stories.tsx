import type { Meta, StoryObj } from '@storybook/react'
import { RangeSlider } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof RangeSlider> = {
  title: 'Biz/components',
  component: RangeSlider,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof RangeSlider>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryRangeSlider: Story = {
  render: () => <RangeSlider></RangeSlider>,
  args: {}
}
