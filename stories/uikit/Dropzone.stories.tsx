import type { Meta, StoryObj } from '@storybook/react'
import { Dropzone } from '@tidbcloud/uikit'
import React from 'react'

const meta: Meta<typeof Dropzone> = {
  title: 'Biz/components',
  component: Dropzone,
  parameters: {}
}

export default meta

type Story = StoryObj<typeof Dropzone>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PrimaryDropzone: Story = {
  render: () => <Dropzone></Dropzone>,
  args: {}
}
