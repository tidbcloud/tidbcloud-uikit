import type { Meta, StoryObj } from '@storybook/react'
import { Code } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Code> = {
  title: 'Biz/components',
  component: Code,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Code>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCode: Story = {
  render: () => <Code></Code>,
  args: {}
}
