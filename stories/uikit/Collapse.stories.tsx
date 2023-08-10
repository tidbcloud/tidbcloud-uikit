import type { Meta, StoryObj } from '@storybook/react'
import { Collapse } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Collapse> = {
  title: 'Biz/components',
  component: Collapse,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Collapse>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCollapse: Story = {
  render: () => <Collapse></Collapse>,
  args: {}
}
