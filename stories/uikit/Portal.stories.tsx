import type { Meta, StoryObj } from '@storybook/react'
import { Portal } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Portal> = {
  title: 'Biz/components',
  component: Portal,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Portal>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryPortal: Story = {
  render: () => <Portal></Portal>,
  args: {}
}
