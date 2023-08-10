import type { Meta, StoryObj } from '@storybook/react'
import { FileButton } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof FileButton> = {
  title: 'Biz/components',
  component: FileButton,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof FileButton>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryFileButton: Story = {
  render: () => <FileButton></FileButton>,
  args: {}
}
