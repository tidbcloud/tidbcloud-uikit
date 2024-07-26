import dayjs from 'dayjs'
import prettyMs from 'pretty-ms'
import { CSSProperties, MouseEventHandler, useMemo, useState } from 'react'

import { IconChevronLeft, IconAlertCircle } from '../../icons/index.js'
import {
  Alert,
  Button,
  Flex,
  Group,
  Text,
  Typography,
  useMantineTheme,
  DatePicker,
  MonthSettings,
  RangeCalendar,
  TimeInput
} from '../../primitive/index.js'

import { AbsoluteTimeRange, TimeRangeValue, timeFormatter } from './helpers.js'

function formatDuration(seconds: number) {
  let d = prettyMs(seconds * 1000, { verbose: true })
  return d
}

interface AbsoluteTimeRangePickerProps {
  value: TimeRangeValue
  minDateTime?: Date
  maxDateTime?: Date
  maxDuration?: number // unit: seconds
  onChange?: (v: AbsoluteTimeRange) => void
  onCancel?: () => void
  onReturnClick?: MouseEventHandler<HTMLElement>
}

const AbsoluteTimeRangePicker: React.FC<React.PropsWithChildren<AbsoluteTimeRangePickerProps>> = ({
  value,
  maxDateTime,
  minDateTime,
  maxDuration,
  onChange,
  onCancel,
  onReturnClick
}) => {
  const theme = useMantineTheme()
  const dayStyle: MonthSettings['dayStyle'] = (_date, modifiers) =>
    (modifiers.weekend && !modifiers.disabled && !modifiers.selected && !modifiers.outside && !modifiers.selectedInRange
      ? { color: theme.colors.gray[7] }
      : null) as CSSProperties

  const [start, setStart] = useState(() => new Date(value[0] * 1000))
  const [end, setEnd] = useState(() => new Date(value[1] * 1000))

  const startAfterEnd = useMemo(() => {
    return start.valueOf() > end.valueOf()
  }, [start, end])
  const beyondMin = useMemo(() => {
    return minDateTime && start.valueOf() < minDateTime.valueOf()
  }, [minDateTime, start])
  const beyondMax = useMemo(() => {
    return maxDateTime && end.valueOf() > maxDateTime.valueOf()
  }, [maxDateTime, end])
  const beyondDuration = useMemo(() => {
    if (maxDuration !== undefined) {
      return end.valueOf() - start.valueOf() > maxDuration * 1000
    }
    return false
  }, [maxDuration, start, end])

  const updateDate = (dates: [Date, Date]) => {
    const newStart = new Date(dates[0])
    newStart.setHours(start.getHours())
    newStart.setMinutes(start.getMinutes())
    newStart.setSeconds(start.getSeconds())
    setStart(newStart)

    // to support to select the same day for start and end
    let newEnd = new Date(dates[0])
    if (dates[1]) {
      newEnd = new Date(dates[1])
    }
    newEnd.setHours(end.getHours())
    newEnd.setMinutes(end.getMinutes())
    newEnd.setSeconds(end.getSeconds())
    setEnd(newEnd)
  }

  const updateTime = (d: Date, setter: ReturnType<typeof useState<Date>>[1]) => {
    setter((old) => {
      const newD = new Date(old!)
      newD.setHours(d.getHours())
      newD.setMinutes(d.getMinutes())
      newD.setSeconds(d.getSeconds())
      return newD
    })
  }
  const apply = () => onChange?.({ type: 'absolute', value: [dayjs(start).unix(), dayjs(end).unix()] })

  return (
    <div className="wd--m-1 wd-w-[280px] wd-p-4">
      <Group className="wd-cursor-pointer" onClick={onReturnClick}>
        <IconChevronLeft size={16} />
        <Typography variant="body-lg">Back</Typography>
      </Group>

      <Group spacing={0} pt={8} position="apart">
        <Typography variant="label-sm">Start</Typography>
        <Group spacing={8}>
          <DatePicker
            onClick={() => {}}
            w={116}
            value={start}
            inputFormat="MMM D, YYYY"
            clearable={false}
            error={beyondMin || startAfterEnd || beyondDuration}
          />
          <TimeInput
            format="24"
            w={90}
            styles={{ input: { paddingLeft: 4, paddingRight: 4 } }}
            withSeconds
            value={start}
            onChange={(d) => updateTime(d, setStart)}
            error={beyondMin || startAfterEnd || beyondDuration}
          />
        </Group>
      </Group>

      <Group spacing={0} pt={8} position="apart">
        <Typography variant="label-sm">End</Typography>
        <Group spacing={8}>
          <DatePicker
            onClick={() => {}}
            w={116}
            value={end}
            inputFormat="MMM D, YYYY"
            clearable={false}
            error={beyondMax || startAfterEnd || beyondDuration}
          />
          <TimeInput
            format="24"
            w={90}
            styles={{ input: { paddingLeft: 4, paddingRight: 4 } }}
            withSeconds
            value={end}
            onChange={(d) => updateTime(d, setEnd)}
            error={beyondMax || startAfterEnd || beyondDuration}
          />
        </Group>
      </Group>

      <Flex justify="center" className="wd-pt-2" pt={8}>
        <RangeCalendar
          value={[start, end]}
          onChange={updateDate}
          maxDate={maxDateTime}
          minDate={minDateTime}
          dayStyle={dayStyle}
        />
      </Flex>

      {(startAfterEnd || beyondMin || beyondMax || beyondDuration) && (
        <Alert icon={<IconAlertCircle size={16} />} color="red" pt={8}>
          {startAfterEnd && <Text color="red">Please select an end time after the start time.</Text>}
          {beyondMin && (
            <Text color="red">
              Please select a start time after <>{timeFormatter(minDateTime!, null, 'MMM D, YYYY HH:mm:ss')}</>
            </Text>
          )}
          {beyondMax && (
            <Text color="red">
              Please select an end time before <>{timeFormatter(maxDateTime!, null, 'MMM D, YYYY HH:mm:ss')}</>
            </Text>
          )}
          {beyondDuration && (
            <Text color="red">
              The selection exceeds the {formatDuration(maxDuration!)} limit, please select a shorter time range.
            </Text>
          )}
        </Alert>
      )}

      <Flex pt={8} gap="xs" justify="flex-end" align="flex-start" direction="row" wrap="wrap">
        <Button size="xs" variant="default" onClick={onCancel}>
          Cancel
        </Button>
        <Button size="xs" onClick={apply} disabled={startAfterEnd || beyondMin || beyondMax || beyondDuration}>
          Apply
        </Button>
      </Flex>
    </div>
  )
}

export default AbsoluteTimeRangePicker
