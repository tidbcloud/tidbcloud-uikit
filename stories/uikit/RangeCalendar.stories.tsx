import type { Meta, StoryObj } from '@storybook/react'
import { RangeCalendar } from '@tidbcloud/uikit/dates'
import React from 'react'

const meta: Meta<typeof RangeCalendar> = {
  title: 'Biz/dates',
  component: RangeCalendar,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof RangeCalendar>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryRangeCalendar: Story = {
  render: () => <RangeCalendar></RangeCalendar>,
  args: {}
}
