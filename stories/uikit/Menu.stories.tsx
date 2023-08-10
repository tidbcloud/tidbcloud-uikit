import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Menu> = {
  title: 'Biz/components',
  component: Menu,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Menu>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryMenu: Story = {
  render: () => <Menu></Menu>,
  args: {}
}
