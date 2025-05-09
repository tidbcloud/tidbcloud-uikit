import { Meta, StoryFn } from '@storybook/react'
import { Stack, Button } from '@tidbcloud/uikit'
import { TimePicker } from '@tidbcloud/uikit/biz'
import { useState } from 'react'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof TimePicker> = {
  title: 'Biz/TimePicker',
  component: TimePicker,
  decorators: [decorator],
  parameters: {}
}

export function Demo() {
  const [value, setValue] = useState<Date>(new Date())
  return (
    <Stack>
      <TimePicker value={value} onChange={setValue} minTime="00:00:00" maxTime="23:59:59" />
      <Button onClick={() => setValue(new Date(Date.now() + Math.random() * 10000000000))}>Set random date</Button>
    </Stack>
  )
}

export function Uncontrolled() {
  return <TimePicker defaultValue={new Date()} onChange={console.log} />
}

export default meta
