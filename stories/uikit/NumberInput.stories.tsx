import type { Meta, StoryObj } from '@storybook/react'
import { NumberInput } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof NumberInput> = {
  title: 'Biz/components',
  component: NumberInput,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof NumberInput>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryNumberInput: Story = {
  render: () => <NumberInput></NumberInput>,
  args: {}
}
