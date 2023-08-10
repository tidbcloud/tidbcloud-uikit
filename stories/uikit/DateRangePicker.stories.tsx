import type { Meta, StoryObj } from '@storybook/react'
import { DateRangePicker } from '@tidbcloud/uikit/dates'
import React from 'react'

const meta: Meta<typeof DateRangePicker> = {
  title: 'Biz/dates',
  component: DateRangePicker,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof DateRangePicker>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryDateRangePicker: Story = {
  render: () => <DateRangePicker></DateRangePicker>,
  args: {}
}
