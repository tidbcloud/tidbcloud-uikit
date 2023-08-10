import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { MantineProvider, NotificationsProvider } from '@tidbcloud/uikit'
import { CodeBlock } from '@tidbcloud/uikit/biz'
import { Theme, themeColors } from '@tidbcloud/uikit/theme'

type Story = StoryObj<typeof CodeBlock>

const themeDecorator = (Story: StoryFn) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        ...Theme,
        colors: themeColors
      }}
    >
      <NotificationsProvider position="top-center">
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      </NotificationsProvider>
    </MantineProvider>
  )
}

const meta: Meta<typeof CodeBlock> = {
  title: 'Biz/CodeBlock',
  component: CodeBlock,
  decorators: [themeDecorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <CodeBlock></CodeBlock>,
  args: {}
}
