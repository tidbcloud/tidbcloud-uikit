import type { Meta, StoryObj } from '@storybook/react'
import { Group } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Group> = {
  title: 'Biz/components',
  component: Group,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Group>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryGroup: Story = {
  render: () => <Group></Group>,
  args: {}
}
