import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Switch } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Switch>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Switch> = {
  title: 'Primitive/Switch',
  component: Switch,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Switch></Switch>,
  args: {}
}
