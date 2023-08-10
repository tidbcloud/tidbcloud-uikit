import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Header> = {
  title: 'Biz/components',
  component: Header,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Header>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryHeader: Story = {
  render: () => <Header></Header>,
  args: {}
}
