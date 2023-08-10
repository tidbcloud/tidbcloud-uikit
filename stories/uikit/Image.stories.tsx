import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Image> = {
  title: 'Biz/components',
  component: Image,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Image>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryImage: Story = {
  render: () => <Image></Image>,
  args: {}
}
