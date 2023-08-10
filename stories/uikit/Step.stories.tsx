import type { Meta, StoryObj } from '@storybook/react'
import { Step } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Step> = {
  title: 'Biz/components',
  component: Step,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Step>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryStep: Story = {
  render: () => <Step></Step>,
  args: {}
}
