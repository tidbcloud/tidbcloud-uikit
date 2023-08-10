import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Modal> = {
  title: 'Biz/components',
  component: Modal,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Modal>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryModal: Story = {
  render: () => <Modal></Modal>,
  args: {}
}
