import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Calendar } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof Calendar>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Calendar> = {
  title: 'Primitive/Dates/Calendar',
  component: Calendar,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Demo() {
  const [value, setValue] = useState<Date>(new Date())
  const onChange = (date: Date) => {
    setValue(date)
  }
  return <Calendar date={value} onDateChange={onChange} minDate={new Date()} />
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Demo />,
  args: {}
}
