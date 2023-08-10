import type { Meta, StoryObj } from '@storybook/react'
import { CloseButton } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof CloseButton> = {
  title: 'Biz/components',
  component: CloseButton,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof CloseButton>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCloseButton: Story = {
  render: () => <CloseButton></CloseButton>,
  args: {}
}
