import type { Meta, StoryObj } from '@storybook/react'
import { DatePickerBase } from '@tidbcloud/uikit/dates'
import React from 'react'

const meta: Meta<typeof DatePickerBase> = {
  title: 'Biz/dates',
  component: DatePickerBase,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof DatePickerBase>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryDatePickerBase: Story = {
  render: () => <DatePickerBase></DatePickerBase>,
  args: {}
}
