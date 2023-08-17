import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Code, Group } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Code>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Code> = {
  title: 'Primitive/Code',
  component: Code,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo() {
  return (
    <Group>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </Group>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PrimaryDemo />,
  args: {}
}
