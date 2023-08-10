import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Select> = {
  title: 'Biz/components',
  component: Select,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Select>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimarySelect: Story = {
  render: () => <Select></Select>,
  args: {}
}
