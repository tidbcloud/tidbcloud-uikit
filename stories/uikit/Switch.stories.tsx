import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Switch> = {
  title: 'Biz/components',
  component: Switch,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Switch>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimarySwitch: Story = {
  render: () => <Switch></Switch>,
  args: {}
}
