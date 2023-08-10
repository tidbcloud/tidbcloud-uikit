import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Accordion> = {
  title: 'Biz/components',
  component: Accordion,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Accordion>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryAccordion: Story = {
  render: () => <Accordion></Accordion>,
  args: {}
}
