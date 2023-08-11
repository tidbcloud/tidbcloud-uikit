import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { TypographyStylesProvider } from '@tidbcloud/uikit'

type Story = StoryObj<typeof TypographyStylesProvider>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof TypographyStylesProvider> = {
  title: 'Primitive/TypographyStylesProvider',
  component: TypographyStylesProvider,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <TypographyStylesProvider></TypographyStylesProvider>,
  args: {}
}
