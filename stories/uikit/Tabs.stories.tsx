import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Tabs } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Tabs>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Tabs> = {
  title: 'Primitive/Tabs',
  component: Tabs,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Tabs></Tabs>,
  args: {}
}
