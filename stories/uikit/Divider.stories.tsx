import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Divider> = {
  title: 'Biz/components',
  component: Divider,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Divider>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryDivider: Story = {
  render: () => <Divider></Divider>,
  args: {}
}
