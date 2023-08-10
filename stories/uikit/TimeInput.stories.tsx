import type { Meta, StoryObj } from '@storybook/react'
import { TimeInput } from '@tidbcloud/uikit/dates'
import React from 'react'

const meta: Meta<typeof TimeInput> = {
  title: 'Biz/dates',
  component: TimeInput,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof TimeInput>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTimeInput: Story = {
  render: () => <TimeInput></TimeInput>,
  args: {}
}
