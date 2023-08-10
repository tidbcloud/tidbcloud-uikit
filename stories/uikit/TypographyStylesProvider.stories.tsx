import type { Meta, StoryObj } from '@storybook/react'
import { TypographyStylesProvider } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof TypographyStylesProvider> = {
  title: 'Biz/components',
  component: TypographyStylesProvider,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof TypographyStylesProvider>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTypographyStylesProvider: Story = {
  render: () => <TypographyStylesProvider></TypographyStylesProvider>,
  args: {}
}
