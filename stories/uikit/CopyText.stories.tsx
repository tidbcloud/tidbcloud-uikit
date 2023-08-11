import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { CopyText } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof CopyText>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof CopyText> = {
  title: 'Biz/CopyText',
  component: CopyText,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <CopyText></CopyText>,
  args: {}
}
