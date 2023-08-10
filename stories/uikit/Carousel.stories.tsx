import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '@tidbcloud/uikit/carousel'
import React from 'react'

const meta: Meta<typeof Carousel> = {
  title: 'Biz/carousel',
  component: Carousel,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Carousel>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryCarousel: Story = {
  render: () => <Carousel></Carousel>,
  args: {}
}
