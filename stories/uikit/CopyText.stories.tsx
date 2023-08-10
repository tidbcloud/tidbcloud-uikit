import type { Meta, StoryObj } from '@storybook/react'
import { CopyText } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof CopyText> = {
  title: 'Biz/components',
  component: CopyText,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof CopyText>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCopyText: Story = {
  render: () => <CopyText></CopyText>,
  args: {}
}
