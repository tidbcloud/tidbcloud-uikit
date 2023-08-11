import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Spoiler } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Spoiler>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Spoiler> = {
  title: 'Primitive/Spoiler',
  component: Spoiler,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Spoiler></Spoiler>,
  args: {}
}
