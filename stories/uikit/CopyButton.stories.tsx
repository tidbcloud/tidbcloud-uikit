import type { Meta, StoryObj } from '@storybook/react'
import { CopyButton } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof CopyButton> = {
  title: 'Biz/components',
  component: CopyButton,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof CopyButton>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCopyButton: Story = {
  render: () => <CopyButton></CopyButton>,
  args: {}
}
