import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof PasswordInput> = {
  title: 'Biz/components',
  component: PasswordInput,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof PasswordInput>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryPasswordInput: Story = {
  render: () => <PasswordInput></PasswordInput>,
  args: {}
}
