import type { Meta, StoryObj } from '@storybook/react'
import { CodeBlock } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof CodeBlock> = {
  title: 'Biz/components',
  component: CodeBlock,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof CodeBlock>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCodeBlock: Story = {
  render: () => <CodeBlock></CodeBlock>,
  args: {}
}
