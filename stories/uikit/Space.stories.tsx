import type { Meta, StoryObj } from '@storybook/react'
import { Space } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Space> = {
  title: 'Biz/components',
  component: Space,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Space>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimarySpace: Story = {
  render: () => <Space></Space>,
  args: {}
}
