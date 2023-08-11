import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Highlight } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Highlight>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Highlight> = {
  title: 'Primitive/Highlight',
  component: Highlight,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Highlight></Highlight>,
  args: {}
}
