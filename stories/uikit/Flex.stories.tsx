import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Flex> = {
  title: 'Biz/components',
  component: Flex,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Flex>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryFlex: Story = {
  render: () => <Flex></Flex>,
  args: {}
}
