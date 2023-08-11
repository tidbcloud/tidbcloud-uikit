import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { NumberInput } from '@tidbcloud/uikit'

type Story = StoryObj<typeof NumberInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof NumberInput> = {
  title: 'Primitive/NumberInput',
  component: NumberInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <NumberInput></NumberInput>,
  args: {}
}
