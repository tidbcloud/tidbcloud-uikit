import type { Meta, StoryObj } from '@storybook/react'
import { Anchor } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Anchor> = {
  title: 'Biz/components',
  component: Anchor,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Anchor>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryAnchor: Story = {
  render: () => <Anchor></Anchor>,
  args: {}
}
