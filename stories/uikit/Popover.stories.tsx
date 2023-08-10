import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Popover> = {
  title: 'Biz/components',
  component: Popover,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Popover>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryPopover: Story = {
  render: () => <Popover></Popover>,
  args: {}
}
