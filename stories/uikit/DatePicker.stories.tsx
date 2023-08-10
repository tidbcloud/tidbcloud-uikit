import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from '@tidbcloud/uikit/dates'
import React from 'react'

const meta: Meta<typeof DatePicker> = {
  title: 'Biz/dates',
  component: DatePicker,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof DatePicker>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryDatePicker: Story = {
  render: () => <DatePicker></DatePicker>,
  args: {}
}
