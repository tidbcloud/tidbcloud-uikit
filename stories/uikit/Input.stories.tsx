import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Input> = {
  title: 'Biz/components',
  component: Input,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Input>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryInput: Story = {
  render: () => <Input></Input>,
  args: {}
}
