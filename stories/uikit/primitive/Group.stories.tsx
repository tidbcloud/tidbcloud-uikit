import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Group, Button } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Group>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Group> = {
  title: 'Primitive/Layout/Group',
  component: Group,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <Group {...rest}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
  ),
  args: {
    grow: false
  },
  argTypes: {
    justify: {
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: { type: 'select' }
    },
    gap: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' }
    }
  }
}
