import type { Meta, StoryObj } from '@storybook/react'
import { Blockquote } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Blockquote> = {
  title: 'Biz/components',
  component: Blockquote,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Blockquote>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryBlockquote: Story = {
  render: () => <Blockquote></Blockquote>,
  args: {}
}
