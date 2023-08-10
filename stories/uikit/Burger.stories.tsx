import type { Meta, StoryObj } from '@storybook/react'
import { Burger } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Burger> = {
  title: 'Biz/components',
  component: Burger,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Burger>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryBurger: Story = {
  render: () => <Burger></Burger>,
  args: {}
}
