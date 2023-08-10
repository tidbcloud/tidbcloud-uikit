import type { Meta, StoryObj } from '@storybook/react'
import { Affix } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Affix> = {
  title: 'Biz/components',
  component: Affix,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Affix>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryAffix: Story = {
  render: () => <Affix></Affix>,
  args: {}
}
