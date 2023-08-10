import type { Meta, StoryObj } from '@storybook/react'
import { Title } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Title> = {
  title: 'Biz/components',
  component: Title,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Title>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTitle: Story = {
  render: () => <Title></Title>,
  args: {}
}
