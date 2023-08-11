import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Title } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Title>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Title> = {
  title: 'Primitive/Title',
  component: Title,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Title></Title>,
  args: {}
}
