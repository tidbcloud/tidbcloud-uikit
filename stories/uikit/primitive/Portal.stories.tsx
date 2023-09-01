import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Anchor, Box, Portal, Text } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Portal>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Portal> = {
  title: 'Primitive/Portal',
  component: Portal,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo() {
  return (
    <Box p="md">
      <Text>
        Portal is wrapper component for ReactDOM.createPortal API. Render any component or element at the end of
        document.body or at given element. Modal and Drawer components are wrapped in Portal by default.
      </Text>
      <Anchor href="https://mantine.dev/core/portal/" target="_blank">
        Usage
      </Anchor>
    </Box>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PrimaryDemo />,
  args: {}
}
