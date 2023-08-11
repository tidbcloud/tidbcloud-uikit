import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Blockquote } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Blockquote>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Blockquote> = {
  title: 'Primitive/Blockquote',
  component: Blockquote,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Blockquote></Blockquote>,
  args: {}
}
