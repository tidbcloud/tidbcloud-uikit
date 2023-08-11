import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Stepper } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Stepper>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Stepper> = {
  title: 'Primitive/Stepper',
  component: Stepper,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Stepper></Stepper>,
  args: {}
}
