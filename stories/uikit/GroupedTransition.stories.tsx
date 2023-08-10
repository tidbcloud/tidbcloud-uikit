import type { Meta, StoryObj } from '@storybook/react'
import { GroupedTransition } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof GroupedTransition> = {
  title: 'Biz/components',
  component: GroupedTransition,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof GroupedTransition>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryGroupedTransition: Story = {
  render: () => <GroupedTransition></GroupedTransition>,
  args: {}
}
