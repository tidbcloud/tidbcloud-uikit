import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { LoadingOverlay } from '@tidbcloud/uikit'

type Story = StoryObj<typeof LoadingOverlay>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Primitive/LoadingOverlay',
  component: LoadingOverlay,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <LoadingOverlay></LoadingOverlay>,
  args: {}
}
