import type { Meta, StoryObj } from '@storybook/react'
import { Aside } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Aside> = {
  title: 'Biz/components',
  component: Aside,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Aside>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryAside: Story = {
  render: () => <Aside></Aside>,
  args: {}
}
