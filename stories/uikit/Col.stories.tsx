import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Col } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Col>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Col> = {
  title: 'Primitive/Col',
  component: Col,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Col></Col>,
  args: {}
}
