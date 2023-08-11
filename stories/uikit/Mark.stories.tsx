import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Mark } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Mark>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Mark> = {
  title: 'Primitive/Mark',
  component: Mark,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Mark></Mark>,
  args: {}
}
