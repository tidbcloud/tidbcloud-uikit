import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Kbd } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Kbd>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Kbd> = {
  title: 'Primitive/Kbd',
  component: Kbd,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Kbd></Kbd>,
  args: {}
}
