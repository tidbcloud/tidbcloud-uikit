import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { JsonInput } from '@tidbcloud/uikit'

type Story = StoryObj<typeof JsonInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof JsonInput> = {
  title: 'Primitive/JsonInput',
  component: JsonInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => <JsonInput {...props}></JsonInput>,
  args: { disabled: false },
  argTypes: {
    disabled: { control: 'boolean' }
  }
}
