import type { Meta, StoryObj } from '@storybook/react'
import { TimeRangeInput } from '@tidbcloud/uikit/dates'
import React from 'react'

const meta: Meta<typeof TimeRangeInput> = {
  title: 'Biz/dates',
  component: TimeRangeInput,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof TimeRangeInput>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTimeRangeInput: Story = {
  render: () => <TimeRangeInput></TimeRangeInput>,
  args: {}
}
