import type { Meta, StoryObj } from '@storybook/react'
import { PhoneInput } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof PhoneInput> = {
  title: 'Biz/components',
  component: PhoneInput,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof PhoneInput>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryPhoneInput: Story = {
  render: () => <PhoneInput></PhoneInput>,
  args: {}
}
