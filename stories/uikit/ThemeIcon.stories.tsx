import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ThemeIcon } from '@tidbcloud/uikit'

type Story = StoryObj<typeof ThemeIcon>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ThemeIcon> = {
  title: 'Primitive/ThemeIcon',
  component: ThemeIcon,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <ThemeIcon></ThemeIcon>,
  args: {}
}
