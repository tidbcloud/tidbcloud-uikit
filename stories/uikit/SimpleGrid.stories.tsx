import type { Meta, StoryObj } from '@storybook/react'
import { SimpleGrid } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof SimpleGrid> = {
  title: 'Biz/components',
  component: SimpleGrid,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof SimpleGrid>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimarySimpleGrid: Story = {
  render: () => <SimpleGrid></SimpleGrid>,
  args: {}
}
