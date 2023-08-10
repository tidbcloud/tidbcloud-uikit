import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Autocomplete> = {
  title: 'Biz/components',
  component: Autocomplete,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Autocomplete>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryAutocomplete: Story = {
  render: () => <Autocomplete></Autocomplete>,
  args: {}
}
