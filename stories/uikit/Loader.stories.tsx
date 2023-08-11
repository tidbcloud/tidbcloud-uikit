import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Loader } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Loader>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Loader> = {
  title: 'Primitive/Loader',
  component: Loader,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Loader></Loader>,
  args: {}
}
