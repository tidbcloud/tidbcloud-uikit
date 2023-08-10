import type { Meta, StoryObj } from '@storybook/react'
import { ThemeIcon } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof ThemeIcon> = {
  title: 'Biz/components',
  component: ThemeIcon,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof ThemeIcon>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryThemeIcon: Story = {
  render: () => <ThemeIcon></ThemeIcon>,
  args: {}
}
