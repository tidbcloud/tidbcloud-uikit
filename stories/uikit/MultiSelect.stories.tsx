import type { Meta, StoryObj } from '@storybook/react'
import { MultiSelect } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof MultiSelect> = {
  title: 'Biz/components',
  component: MultiSelect,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof MultiSelect>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryMultiSelect: Story = {
  render: () => <MultiSelect></MultiSelect>,
  args: {}
}
