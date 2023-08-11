import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Header } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Header>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Header> = {
  title: 'Primitive/Header',
  component: Header,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Header></Header>,
  args: {}
}
