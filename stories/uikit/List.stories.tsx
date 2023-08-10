import type { Meta, StoryObj } from '@storybook/react'
import { List } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof List> = {
  title: 'Biz/components',
  component: List,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof List>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryList: Story = {
  render: () => <List></List>,
  args: {}
}
