import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { MediaQuery } from '@tidbcloud/uikit'

type Story = StoryObj<typeof MediaQuery>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof MediaQuery> = {
  title: 'Primitive/MediaQuery',
  component: MediaQuery,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <MediaQuery></MediaQuery>,
  args: {}
}
