import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { DatePickerBase } from '@tidbcloud/uikit'

type Story = StoryObj<typeof DatePickerBase>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof DatePickerBase> = {
  title: 'Primitive/DatePickerBase',
  component: DatePickerBase,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <DatePickerBase></DatePickerBase>,
  args: {}
}
