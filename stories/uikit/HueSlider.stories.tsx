import type { Meta, StoryObj } from '@storybook/react'
import { HueSlider } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof HueSlider> = {
  title: 'Biz/components',
  component: HueSlider,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof HueSlider>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryHueSlider: Story = {
  render: () => <HueSlider></HueSlider>,
  args: {}
}
