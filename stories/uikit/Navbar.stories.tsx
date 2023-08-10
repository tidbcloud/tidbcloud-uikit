import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Navbar> = {
  title: 'Biz/components',
  component: Navbar,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Navbar>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryNavbar: Story = {
  render: () => <Navbar></Navbar>,
  args: {}
}
