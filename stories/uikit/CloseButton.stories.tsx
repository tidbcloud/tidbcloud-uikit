import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { CloseButton } from '@tidbcloud/uikit'

type Story = StoryObj<typeof CloseButton>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof CloseButton> = {
  title: 'Primitive/CloseButton',
  component: CloseButton,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <CloseButton></CloseButton>,
  args: {}
}
