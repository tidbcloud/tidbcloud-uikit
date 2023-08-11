import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Container } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Container>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Container> = {
  title: 'Primitive/Container',
  component: Container,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Container></Container>,
  args: {}
}
