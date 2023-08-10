import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Dialog> = {
  title: 'Biz/components',
  component: Dialog,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Dialog>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryDialog: Story = {
  render: () => <Dialog></Dialog>,
  args: {}
}
