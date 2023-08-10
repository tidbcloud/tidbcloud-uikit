import type { Meta, StoryObj } from '@storybook/react'
import { Month } from '@tidbcloud/uikit/dates'
import React from 'react'

const meta: Meta<typeof Month> = {
  title: 'Biz/dates',
  component: Month,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Month>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryMonth: Story = {
  render: () => <Month></Month>,
  args: {}
}
