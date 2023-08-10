import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Slider> = {
  title: 'Biz/components',
  component: Slider,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Slider>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimarySlider: Story = {
  render: () => <Slider></Slider>,
  args: {}
}
