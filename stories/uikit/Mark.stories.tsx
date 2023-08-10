import type { Meta, StoryObj } from '@storybook/react'
import { Mark } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Mark> = {
  title: 'Biz/components',
  component: Mark,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Mark>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryMark: Story = {
  render: () => <Mark></Mark>,
  args: {}
}
