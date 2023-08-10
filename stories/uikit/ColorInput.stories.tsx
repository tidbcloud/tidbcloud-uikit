import type { Meta, StoryObj } from '@storybook/react'
import { ColorInput } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof ColorInput> = {
  title: 'Biz/components',
  component: ColorInput,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof ColorInput>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryColorInput: Story = {
  render: () => <ColorInput></ColorInput>,
  args: {}
}
