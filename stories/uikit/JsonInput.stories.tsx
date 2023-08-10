import type { Meta, StoryObj } from '@storybook/react'
import { JsonInput } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof JsonInput> = {
  title: 'Biz/components',
  component: JsonInput,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof JsonInput>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryJsonInput: Story = {
  render: () => <JsonInput></JsonInput>,
  args: {}
}
