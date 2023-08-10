import type { Meta, StoryObj } from '@storybook/react'
import { ColorSchemeProvider } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof ColorSchemeProvider> = {
  title: 'Biz/components',
  component: ColorSchemeProvider,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof ColorSchemeProvider>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryColorSchemeProvider: Story = {
  render: () => <ColorSchemeProvider></ColorSchemeProvider>,
  args: {}
}
