import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Select } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Select>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Select> = {
  title: 'Primitive/Select',
  component: Select,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Select></Select>,
  args: {}
}
