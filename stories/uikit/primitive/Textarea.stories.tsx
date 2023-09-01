import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Textarea } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Textarea>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Textarea> = {
  title: 'Primitive/Textarea',
  component: Textarea,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Textarea label="With required asterisk" withAsterisk />
      <Textarea label="Just required" required />
      <Textarea label="Required asterisk off" required withAsterisk={false} />
      <Textarea label="Required false asterisk on" required={false} withAsterisk />
    </div>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Asterisk />,
  args: {}
}
