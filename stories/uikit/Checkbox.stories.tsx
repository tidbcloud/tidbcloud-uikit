import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Checkbox> = {
  title: 'Biz/components',
  component: Checkbox,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Checkbox>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCheckbox: Story = {
  render: () => <Checkbox></Checkbox>,
  args: {}
}
