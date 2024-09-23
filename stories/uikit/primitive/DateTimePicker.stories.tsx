import { Meta, StoryFn } from '@storybook/react'
import { DateTimePicker } from '@tidbcloud/uikit/biz'
import { useState } from 'react'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof DateTimePicker> = {
  title: 'Primitive/DateTimePicker',
  component: DateTimePicker,
  decorators: [decorator],
  parameters: {}
}

export function Demo() {
  const [value, setValue] = useState<Date>(new Date())
  return <DateTimePicker value={value} onChange={setValue} startDate={new Date()} />
}

export default meta
