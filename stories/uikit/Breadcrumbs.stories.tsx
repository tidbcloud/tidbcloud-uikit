import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Biz/components',
  component: Breadcrumbs,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryBreadcrumbs: Story = {
  render: () => <Breadcrumbs></Breadcrumbs>,
  args: {}
}
