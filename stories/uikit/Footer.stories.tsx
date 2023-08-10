import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Footer> = {
  title: 'Biz/components',
  component: Footer,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Footer>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryFooter: Story = {
  render: () => <Footer></Footer>,
  args: {}
}
