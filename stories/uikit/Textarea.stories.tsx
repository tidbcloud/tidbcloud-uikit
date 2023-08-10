import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Textarea> = {
  title: 'Biz/components',
  component: Textarea,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Textarea>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTextarea: Story = {
  render: () => <Textarea></Textarea>,
  args: {}
}
