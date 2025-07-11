import { Meta, StoryFn } from '@storybook/react'
import { Button, Stack, Typography } from '@tidbcloud/uikit'
import { DateTimePicker, useDateTimePicker } from '@tidbcloud/uikit/biz'
import { dayjs } from '@tidbcloud/uikit/utils'

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

const startDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 3) // 3 days ago
const endDate = new Date()

export function Demo() {
  const { value, start, end, setValue } = useDateTimePicker({
    start: startDate,
    end: endDate,
    defaultValue: new Date(),
    utcOffset: '+00:00',
    onChange: (date, utcString) => {
      // date is actually the time you can sent to the server
      console.log(date?.format('YYYY-MM-DD HH:mm:ss Z'), utcString)
    }
  })

  return (
    <Stack>
      <DateTimePicker
        value={value}
        onChange={setValue}
        startDate={start}
        endDate={end}
        formatter={(val) => dayjs(val).utcOffset('+00:00', true).format('YYYY-MM-DD HH:mm:ss Z')}
        footer={
          <Stack gap={4}>
            <Typography size="sm">Local time: {dayjs(value).format('YYYY-MM-DD HH:mm:ss Z')}</Typography>
            <Typography size="sm">
              Orgnization time:{' '}
              {dayjs(value)
                .utcOffset(60 * -7)
                .format('YYYY-MM-DD HH:mm:ss Z')}
            </Typography>
          </Stack>
        }
      />
      <Button onClick={() => setValue(new Date(Date.now() + Math.random() * 10000000000))}>Set random date</Button>
    </Stack>
  )
}

export function Uncontrolled() {
  return <DateTimePicker defaultValue={new Date()} onChange={console.log} />
}

export default meta
