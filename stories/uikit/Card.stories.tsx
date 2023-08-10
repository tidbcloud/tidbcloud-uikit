import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Card> = {
  title: 'Biz/components',
  component: Card,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Card>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCard: Story = {
  render: () => <Card></Card>,
  args: {}
}
