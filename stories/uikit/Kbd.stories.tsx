import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Kbd> = {
  title: 'Biz/components',
  component: Kbd,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Kbd>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryKbd: Story = {
  render: () => <Kbd></Kbd>,
  args: {}
}
