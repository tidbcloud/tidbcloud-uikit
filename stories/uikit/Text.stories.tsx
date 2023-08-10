import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Text> = {
  title: 'Biz/components',
  component: Text,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Text>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryText: Story = {
  render: () => <Text></Text>,
  args: {}
}
