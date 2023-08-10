import type { Meta, StoryObj } from '@storybook/react'
import { Spoiler } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Spoiler> = {
  title: 'Biz/components',
  component: Spoiler,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Spoiler>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimarySpoiler: Story = {
  render: () => <Spoiler></Spoiler>,
  args: {}
}
