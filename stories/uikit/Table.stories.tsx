import type { Meta, StoryObj } from '@storybook/react'
import { Table } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Table> = {
  title: 'Biz/components',
  component: Table,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Table>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTable: Story = {
  render: () => <Table></Table>,
  args: {}
}
