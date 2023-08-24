import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Card } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Card>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Card> = {
  title: 'Primitive/Card',
  component: Card,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Usage() {
  return (
    <div style={{ maxWidth: 400, padding: 40, margin: 'auto' }}>
      <Card withBorder p="lg">
        <Card.Section inheritPadding>Card section 1</Card.Section>
        <Card.Section inheritPadding withBorder>
          Card section 2
        </Card.Section>
        <Card.Section inheritPadding withBorder>
          Card section 3
        </Card.Section>
        <Card.Section inheritPadding withBorder>
          Card section 4
        </Card.Section>
      </Card>
    </div>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: Usage
}
