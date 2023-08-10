import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof AspectRatio> = {
  title: 'Biz/components',
  component: AspectRatio,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof AspectRatio>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryAspectRatio: Story = {
  render: () => <AspectRatio></AspectRatio>,
  args: {}
}
