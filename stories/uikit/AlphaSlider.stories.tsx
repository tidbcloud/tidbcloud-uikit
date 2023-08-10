import type { Meta, StoryObj } from '@storybook/react'
import { AlphaSlider } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof AlphaSlider> = {
  title: 'Biz/components',
  component: AlphaSlider,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof AlphaSlider>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryAlphaSlider: Story = {
  render: () => <AlphaSlider></AlphaSlider>,
  args: {}
}
