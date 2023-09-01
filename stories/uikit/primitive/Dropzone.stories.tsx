import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Dropzone } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Dropzone>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Dropzone> = {
  title: 'Primitive/Dropzone',
  component: Dropzone,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Dropzone></Dropzone>,
  args: {}
}
