import type { Meta, StoryObj } from '@storybook/react'
import { Overlay } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Overlay> = {
  title: 'Biz/components',
  component: Overlay,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Overlay>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryOverlay: Story = {
  render: () => <Overlay></Overlay>,
  args: {}
}
