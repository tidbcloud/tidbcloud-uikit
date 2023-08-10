import type { Meta, StoryObj } from '@storybook/react'
import { UnstyledButton } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof UnstyledButton> = {
  title: 'Biz/components',
  component: UnstyledButton,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof UnstyledButton>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryUnstyledButton: Story = {
  render: () => <UnstyledButton></UnstyledButton>,
  args: {}
}
