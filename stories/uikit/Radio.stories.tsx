import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Radio> = {
  title: 'Biz/components',
  component: Radio,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Radio>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryRadio: Story = {
  render: () => <Radio></Radio>,
  args: {}
}
