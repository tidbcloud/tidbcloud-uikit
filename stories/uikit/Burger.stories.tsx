import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Burger } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Burger>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Burger> = {
  title: 'Primitive/Burger',
  component: Burger,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Burger></Burger>,
  args: {}
}
