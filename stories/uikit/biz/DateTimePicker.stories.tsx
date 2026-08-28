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
    today,
    startDate,
    endDate,
    onChange,
    formatter
  } = useDateTimePicker({
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
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
        futureOnly
        value={displayValue}
        onChange={onChange}
        today={today}
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

export function LegacyDateRange() {
  const [value, setValue] = useState(() => new Date())

  return (
    <DateTimePicker
      startDate={dayjs().subtract(1, 'year').toDate()}
      endDate={dayjs().add(1, 'year').toDate()}
      value={value}
      onChange={setValue}
    />
  )
}

export function MonthEnd() {
  const today = new Date(2026, 7, 31, 8, 0, 0)
  const [value, setValue] = useState(new Date(2026, 8, 12, 8, 0, 0))

  return (
    <DateTimePicker
      futureOnly
      today={today}
      startDate={today}
      endDate={new Date(2027, 7, 31, 23, 59, 59)}
      value={value}
      onChange={setValue}
    />
  )
}

export function FutureStartDate() {
  const today = new Date(2026, 7, 12, 8, 0, 0)
  const startDate = new Date(2026, 9, 15, 8, 0, 0)
  const [value, setValue] = useState(startDate)

  return (
    <DateTimePicker
      futureOnly
      today={today}
      startDate={startDate}
      endDate={new Date(2027, 9, 15, 23, 59, 59)}
      value={value}
      onChange={setValue}
    />
  )
}

export function DisabledAndOutsideDates() {
  const [today] = useState(() => new Date())
  const [value, setValue] = useState(() => dayjs().add(2, 'day').toDate())

  return (
    <DateTimePicker
      futureOnly
      today={today}
      startDate={today}
      endDate={dayjs(today).add(1, 'year').toDate()}
      value={value}
      onChange={setValue}
    />
  )
}

export default meta
