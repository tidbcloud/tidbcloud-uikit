import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof TextInput> = {
  title: 'Biz/components',
  component: TextInput,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof TextInput>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTextInput: Story = {
  render: () => <TextInput></TextInput>,
  args: {}
}
