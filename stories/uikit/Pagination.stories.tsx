import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Pagination> = {
  title: 'Biz/components',
  component: Pagination,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Pagination>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryPagination: Story = {
  render: () => <Pagination></Pagination>,
  args: {}
}
