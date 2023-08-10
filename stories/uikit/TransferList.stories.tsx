import type { Meta, StoryObj } from '@storybook/react'
import { TransferList } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof TransferList> = {
  title: 'Biz/components',
  component: TransferList,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof TransferList>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTransferList: Story = {
  render: () => <TransferList></TransferList>,
  args: {}
}
