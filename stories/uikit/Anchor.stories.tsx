import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Anchor } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Anchor>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Anchor> = {
  title: 'Primitive/Anchor',
  component: Anchor,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Anchor></Anchor>,
  args: {}
}
