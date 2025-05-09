import { Meta, StoryFn } from '@storybook/react'
import { Stack, Button } from '@tidbcloud/uikit'
import { TimePicker } from '@tidbcloud/uikit/biz'
import { dayjs } from '@tidbcloud/uikit/utils'
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

export function WithLabel() {
  return <TimePicker maw={200} label="Input label" description="Input description" />
}

export function Controlled() {
  const [value, setValue] = useState<string>('12:00:00')
  return (
    <Stack>
      <TimePicker maw={200} value={value} onChange={setValue} minTime="00:00:00" maxTime="23:59:59" />
      <Button
        onClick={() =>
          setValue(
            dayjs()
              .add(Math.random() * 10000000000, 'second')
              .format('HH:mm:ss')
          )
        }
      >
        Set random time
      </Button>
    </Stack>
  )
}

export function Uncontrolled() {
  return <TimePicker maw={200} defaultValue="12:00:00" onChange={console.log} />
}

export function Disabled() {
  return <TimePicker maw={200} disable />
}

export function Accessibility() {
  return (
    <>
      <p>Set aria-label when used without label prop, so screen reader will read it and not showing any label</p>
      <TimePicker maw={200} aria-label="My input" />
    </>
  )
}

export default meta
