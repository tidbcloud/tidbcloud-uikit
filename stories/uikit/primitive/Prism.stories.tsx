import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Prism } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Prism>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Prism> = {
  title: 'Primitive/Prism',
  component: Prism,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Prism></Prism>,
  args: {}
}
