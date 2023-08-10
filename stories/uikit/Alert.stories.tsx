import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Alert> = {
  title: 'Biz/components',
  component: Alert,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Alert>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryAlert: Story = {
  render: () => <Alert></Alert>,
  args: {}
}
