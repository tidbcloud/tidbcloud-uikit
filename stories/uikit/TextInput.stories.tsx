import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { TextInput } from '@tidbcloud/uikit'

type Story = StoryObj<typeof TextInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof TextInput> = {
  title: 'Primitive/TextInput',
  component: TextInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <TextInput></TextInput>,
  args: {}
}
