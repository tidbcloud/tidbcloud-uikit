import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { MantineProvider, NotificationsProvider } from '@tidbcloud/uikit'
import { CopyButton } from '@tidbcloud/uikit'
import { Theme, themeColors } from '@tidbcloud/uikit/theme'

type Story = StoryObj<typeof CopyButton>

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

const meta: Meta<typeof CopyButton> = {
  title: 'Primitive/CopyButton',
  component: CopyButton,
  decorators: [themeDecorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <CopyButton></CopyButton>,
  args: {}
}
