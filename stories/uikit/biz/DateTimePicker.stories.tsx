import { Meta, StoryFn } from '@storybook/react'
import { Button, Stack } from '@tidbcloud/uikit'
import { DateTimePicker } from '@tidbcloud/uikit/biz'
import { dayjs } from '@tidbcloud/uikit/utils'
import { useState } from 'react'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof DateTimePicker> = {
  title: 'Biz/DateTimePicker',
  component: DateTimePicker,
  decorators: [decorator],
  parameters: {}
}

const startDate = new Date()
const endDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 20) // 3 days later

export function Demo() {
  // const [value, setValue] = useState<Date>(new Date())
  const [value, setValue] = useState('2025-07-15T20:00:00Z')
  return (
    <Stack>
      <DateTimePicker
        value={dayjs(value).toDate()}
        onChange={(val) => setValue(new Date(dayjs(val).format('YYYY-MM-DD HH:mm Z')).toISOString())}
        startDate={startDate}
        endDate={endDate}
        utcOffset={0}
        // formatter={(val) =>
        //   dayjs(val)
        //     .utcOffset(-7 * 60)
        //     .format('YYYY-MM-DD HH:mm:ss Z')
        // }
      />
      {/* <Button onClick={() => setValue(new Date(Date.now() + Math.random() * 10000000000))}>Set random date</Button> */}
    </Stack>
  )
}

export function Uncontrolled() {
  return <DateTimePicker defaultValue={new Date()} onChange={console.log} />
}

export default meta
