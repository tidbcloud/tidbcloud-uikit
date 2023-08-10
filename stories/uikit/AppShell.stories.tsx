import type { Meta, StoryObj } from '@storybook/react'
import { AppShell } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof AppShell> = {
  title: 'Biz/components',
  component: AppShell,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof AppShell>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryAppShell: Story = {
  render: () => <AppShell></AppShell>,
  args: {}
}
