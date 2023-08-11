import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Affix } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Affix>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Affix> = {
  title: 'Primitive/Affix',
  component: Affix,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Affix></Affix>,
  args: {}
}
