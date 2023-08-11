import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Radio } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Radio>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Radio> = {
  title: 'Primitive/Radio',
  component: Radio,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Radio></Radio>,
  args: {}
}
