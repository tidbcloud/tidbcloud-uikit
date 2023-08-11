import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Accordion } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Accordion>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Accordion> = {
  title: 'Primitive/Accordion',
  component: Accordion,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Accordion></Accordion>,
  args: {}
}
