import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Tabs> = {
  title: 'Biz/components',
  component: Tabs,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Tabs>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTabs: Story = {
  render: () => <Tabs></Tabs>,
  args: {}
}
