import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Navbar } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Navbar>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Navbar> = {
  title: 'Primitive/Navbar',
  component: Navbar,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Navbar></Navbar>,
  args: {}
}
