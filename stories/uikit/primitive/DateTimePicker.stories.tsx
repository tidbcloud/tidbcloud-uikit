import { Meta, StoryFn } from '@storybook/react'
import { Stack, Button } from '@tidbcloud/uikit'
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

const startDate = new Date()
const endDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)

export function Demo() {
  const [value, setValue] = useState<Date>(new Date())
  return (
    <Stack>
      <DateTimePicker value={value} onChange={setValue} startDate={startDate} endDate={endDate} />
      <Button onClick={() => setValue(new Date(Date.now() + Math.random() * 10000000000))}>Set random date</Button>
    </Stack>
  )
}

export function Uncontrolled() {
  return <DateTimePicker defaultValue={new Date()} onChange={console.log} />
}

export default meta
