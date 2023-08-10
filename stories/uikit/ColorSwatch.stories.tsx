import type { Meta, StoryObj } from '@storybook/react'
import { ColorSwatch } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof ColorSwatch> = {
  title: 'Biz/components',
  component: ColorSwatch,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof ColorSwatch>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryColorSwatch: Story = {
  render: () => <ColorSwatch></ColorSwatch>,
  args: {}
}
