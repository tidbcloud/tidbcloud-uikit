import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof ScrollArea> = {
  title: 'Biz/components',
  component: ScrollArea,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof ScrollArea>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryScrollArea: Story = {
  render: () => <ScrollArea></ScrollArea>,
  args: {}
}
