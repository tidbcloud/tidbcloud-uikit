import { Meta, StoryFn } from '@storybook/react'
import { Button, Stack, Typography } from '@tidbcloud/uikit'
import { DateTimePicker, useDateTimePicker } from '@tidbcloud/uikit/biz'
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

export function Demo() {
  const [value, setValue] = useState<Date>(new Date())
  const utcOffset = '-01:00'
  const {
    value: displayValue,
    startDate,
    endDate,
    onChange,
    formatter
  } = useDateTimePicker({
    startDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    endDate: new Date(),
    value,
    utcOffset,
    onChange: setValue,
    format: 'YYYY-MM-DD HH:mm:ss Z'
  })

  // This is the value that will be sent to the server
  console.log(dayjs.utc(value).utcOffset(utcOffset).format('YYYY-MM-DD HH:mm:ss Z'))
  return (
    <Stack>
      <DateTimePicker
        value={displayValue}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        formatter={formatter}
        footer={
          <Stack gap={4}>
            <Typography size="sm">Local time: {dayjs(value).format('YYYY-MM-DD HH:mm:ss Z')}</Typography>
            <Typography size="sm">
              Orgnization time: {dayjs(value).utcOffset(utcOffset).format('YYYY-MM-DD HH:mm:ss Z')}
            </Typography>
          </Stack>
        }
      />
      <Button onClick={() => onChange?.(new Date(Date.now() + Math.random() * 10000000000))}>Set random date</Button>
    </Stack>
  )
}

export function Uncontrolled() {
  return <DateTimePicker defaultValue={new Date()} onChange={console.log} />
}

export default meta
