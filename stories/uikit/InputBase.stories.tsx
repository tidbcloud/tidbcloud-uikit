import type { Meta, StoryObj } from '@storybook/react'
import { InputBase } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof InputBase> = {
  title: 'Biz/components',
  component: InputBase,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof InputBase>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryInputBase: Story = {
  render: () => <InputBase></InputBase>,
  args: {}
}
