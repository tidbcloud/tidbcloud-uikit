import type { Meta, StoryObj } from '@storybook/react'
import { NotificationsProvider } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof NotificationsProvider> = {
  title: 'Biz/components',
  component: NotificationsProvider,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof NotificationsProvider>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryNotificationsProvider: Story = {
  render: () => <NotificationsProvider></NotificationsProvider>,
  args: {}
}
