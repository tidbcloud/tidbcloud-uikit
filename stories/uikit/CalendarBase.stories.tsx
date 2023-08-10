import type { Meta, StoryObj } from '@storybook/react'
import { CalendarBase } from '@tidbcloud/uikit/dates'
import React from 'react'

const meta: Meta<typeof CalendarBase> = {
  title: 'Biz/dates',
  component: CalendarBase,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof CalendarBase>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCalendarBase: Story = {
  render: () => <CalendarBase></CalendarBase>,
  args: {}
}
