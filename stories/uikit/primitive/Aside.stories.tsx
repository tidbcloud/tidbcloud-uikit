import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Aside } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Aside>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Aside> = {
  title: 'Primitive/Aside',
  component: Aside,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Aside></Aside>,
  args: {}
}
