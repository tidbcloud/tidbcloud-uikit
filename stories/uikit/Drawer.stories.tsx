import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Drawer> = {
  title: 'Biz/components',
  component: Drawer,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Drawer>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryDrawer: Story = {
  render: () => <Drawer></Drawer>,
  args: {}
}
