import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Container> = {
  title: 'Biz/components',
  component: Container,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Container>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryContainer: Story = {
  render: () => <Container></Container>,
  args: {}
}
