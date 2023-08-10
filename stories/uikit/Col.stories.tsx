import type { Meta, StoryObj } from '@storybook/react'
import { Col } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Col> = {
  title: 'Biz/components',
  component: Col,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Col>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCol: Story = {
  render: () => <Col></Col>,
  args: {}
}
