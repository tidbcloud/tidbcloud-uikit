import type { Meta, StoryObj } from '@storybook/react'
import { OptionalPortal } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof OptionalPortal> = {
  title: 'Biz/components',
  component: OptionalPortal,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof OptionalPortal>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryOptionalPortal: Story = {
  render: () => <OptionalPortal></OptionalPortal>,
  args: {}
}
