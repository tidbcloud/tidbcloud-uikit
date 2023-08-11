import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Center } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Center>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Center> = {
  title: 'Primitive/Center',
  component: Center,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <Center style={{ width: 400, height: 200 }} bg="cyan.2">
      <div>All elements inside Center are centered</div>
    </Center>
  ),
  args: {}
}
