import type { Meta, StoryObj } from '@storybook/react'
import { Highlight } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Highlight> = {
  title: 'Biz/components',
  component: Highlight,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Highlight>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryHighlight: Story = {
  render: () => <Highlight></Highlight>,
  args: {}
}
