import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Checkbox } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Checkbox>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Checkbox> = {
  title: 'Primitive/Checkbox',
  component: Checkbox,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Checkbox></Checkbox>,
  args: {}
}
