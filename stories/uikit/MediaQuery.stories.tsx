import type { Meta, StoryObj } from '@storybook/react'
import { MediaQuery } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof MediaQuery> = {
  title: 'Biz/components',
  component: MediaQuery,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof MediaQuery>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryMediaQuery: Story = {
  render: () => <MediaQuery></MediaQuery>,
  args: {}
}
