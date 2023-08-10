import type { Meta, StoryObj } from '@storybook/react'
import { MantineProvider } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof MantineProvider> = {
  title: 'Biz/components',
  component: MantineProvider,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof MantineProvider>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryMantineProvider: Story = {
  render: () => <MantineProvider></MantineProvider>,
  args: {}
}
