import type { Meta, StoryObj } from '@storybook/react'
import { Center } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Center> = {
  title: 'Biz/components',
  component: Center,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Center>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCenter: Story = {
  render: () => <Center></Center>,
  args: {}
}
