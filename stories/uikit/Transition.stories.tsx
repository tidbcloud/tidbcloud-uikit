import type { Meta, StoryObj } from '@storybook/react'
import { Transition } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Transition> = {
  title: 'Biz/components',
  component: Transition,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Transition>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryTransition: Story = {
  render: () => <Transition></Transition>,
  args: {}
}
