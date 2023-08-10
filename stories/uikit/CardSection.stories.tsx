import type { Meta, StoryObj } from '@storybook/react'
import { CardSection } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof CardSection> = {
  title: 'Biz/components',
  component: CardSection,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof CardSection>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCardSection: Story = {
  render: () => <CardSection></CardSection>,
  args: {}
}
