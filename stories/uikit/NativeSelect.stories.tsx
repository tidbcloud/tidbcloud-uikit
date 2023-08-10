import type { Meta, StoryObj } from '@storybook/react'
import { NativeSelect } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof NativeSelect> = {
  title: 'Biz/components',
  component: NativeSelect,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof NativeSelect>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryNativeSelect: Story = {
  render: () => <NativeSelect></NativeSelect>,
  args: {}
}
