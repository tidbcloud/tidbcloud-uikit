import type { Meta, StoryObj } from '@storybook/react'
import { ColorPicker } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof ColorPicker> = {
  title: 'Biz/components',
  component: ColorPicker,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof ColorPicker>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryColorPicker: Story = {
  render: () => <ColorPicker></ColorPicker>,
  args: {}
}
