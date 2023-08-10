import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '@tidbcloud/uikit/dates'
import React from 'react'

const meta: Meta<typeof Calendar> = {
  title: 'Biz/dates',
  component: Calendar,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Calendar>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCalendar: Story = {
  render: () => <Calendar></Calendar>,
  args: {}
}
