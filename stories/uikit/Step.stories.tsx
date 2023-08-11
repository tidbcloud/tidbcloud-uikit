import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Step } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Step>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Step> = {
  title: 'Primitive/Step',
  component: Step,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Step></Step>,
  args: {}
}
