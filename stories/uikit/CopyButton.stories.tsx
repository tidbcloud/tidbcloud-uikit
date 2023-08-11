import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { CopyButton } from '@tidbcloud/uikit'

type Story = StoryObj<typeof CopyButton>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof CopyButton> = {
  title: 'Primitive/CopyButton',
  component: CopyButton,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <CopyButton></CopyButton>,
  args: {}
}
