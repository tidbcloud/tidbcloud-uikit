import type { Meta, StoryObj } from '@storybook/react'
import { FocusTrap } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof FocusTrap> = {
  title: 'Biz/components',
  component: FocusTrap,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof FocusTrap>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryFocusTrap: Story = {
  render: () => <FocusTrap></FocusTrap>,
  args: {}
}
