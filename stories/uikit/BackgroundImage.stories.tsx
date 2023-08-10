import type { Meta, StoryObj } from '@storybook/react'
import { BackgroundImage } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof BackgroundImage> = {
  title: 'Biz/components',
  component: BackgroundImage,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof BackgroundImage>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryBackgroundImage: Story = {
  render: () => <BackgroundImage></BackgroundImage>,
  args: {}
}
