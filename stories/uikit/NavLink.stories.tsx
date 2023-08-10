import type { Meta, StoryObj } from '@storybook/react'
import { NavLink } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof NavLink> = {
  title: 'Biz/components',
  component: NavLink,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof NavLink>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryNavLink: Story = {
  render: () => <NavLink></NavLink>,
  args: {}
}
