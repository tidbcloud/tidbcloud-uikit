import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Collapse } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Collapse>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Collapse> = {
  title: 'Primitive/Collapse',
  component: Collapse,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Collapse></Collapse>,
  args: {}
}
