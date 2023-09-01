import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Anchor } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Anchor>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Anchor> = {
  title: 'Primitive/Anchor',
  component: Anchor,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <Anchor href="https://google.com/" target="_blank">
      this links to google
    </Anchor>
  ),
  args: {}
}

export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor component="button" type="button" color="red.9">
        Anchor as button
      </Anchor>

      <br />

      <Anchor component="span">Anchor as span</Anchor>
    </div>
  )
}

export function WithTextProps() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor size="lg" weight={700} color="red">
        Text props
      </Anchor>
    </div>
  )
}

export function InheritFontSize() {
  return (
    <div style={{ padding: 40, fontSize: 50 }}>
      <Anchor href="https://mantine.dev/">Should be 50px</Anchor>
    </div>
  )
}

export function WithUnderlineProp() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor href="/">Underline should be ENABLED</Anchor>
      <br />
      <Anchor href="/" underline={false}>
        Underline should be DISABLED
      </Anchor>
    </div>
  )
}
