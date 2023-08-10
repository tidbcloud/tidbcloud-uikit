import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Grid> = {
  title: 'Biz/components',
  component: Grid,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Grid>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryGrid: Story = {
  render: () => <Grid></Grid>,
  args: {}
}
