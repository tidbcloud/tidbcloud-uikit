import dayjs from 'dayjs'
import { MouseEventHandler, useMemo, useState } from 'react'

import { IconChevronLeft, IconAlertCircle } from '../../icons/index.js'
import {
  Box,
  Alert,
  Button,
  Flex,
  Group,
  Text,
  Typography,
  DatePicker,
  TimeInput,
  Input
} from '../../primitive/index.js'

import { AbsoluteTimeRange, TimeRangeValue, timeFormatter, formatDuration } from './helpers.js'

interface AbsoluteTimeRangePickerProps {
  value: TimeRangeValue
  minDateTime?: Date
  maxDateTime?: Date
  maxDuration?: number // unit: seconds
  onChange?: (v: AbsoluteTimeRange) => void
  onCancel?: () => void
  onReturnClick?: MouseEventHandler<HTMLElement>
}

const AbsoluteTimeRangePicker = ({
  value,
  maxDateTime,
  minDateTime,
  maxDuration,
  onChange,
  onCancel,
  onReturnClick
}: AbsoluteTimeRangePickerProps) => {
  const [start, setStart] = useState(() => new Date(value[0] * 1000))
  const [end, setEnd] = useState(() => new Date(value[1] * 1000))
  const startTime = dayjs(start).format('HH:mm:ss')
  const endTime = dayjs(end).format('HH:mm:ss')

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

  const [displayRangeDate, setDisplayRangeDate] = useState<[Date | null, Date | null]>([start, end])

  const updateRangeDate = (dates: [Date, Date]) => {
    setDisplayRangeDate(dates)

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

  const updateTime = (v: string, setter: ReturnType<typeof useState<Date>>[1]) => {
    setter((old) => {
      const d = dayjs(v, 'HH:mm:ss').toDate()
      const newD = new Date(old!)
      newD.setHours(d.getHours())
      newD.setMinutes(d.getMinutes())
      newD.setSeconds(d.getSeconds())
      return newD
    })
  }
  const apply = () => onChange?.({ type: 'absolute', value: [dayjs(start).unix(), dayjs(end).unix()] })

  return (
    <Box p={16} w={280} m={-4}>
      <Group onClick={onReturnClick} sx={{ cursor: 'pointer' }}>
        <IconChevronLeft size={16} />
        <Typography variant="body-lg">Back</Typography>
      </Group>

      <Group gap={0} pt={8} justify="space-between">
        <Typography variant="label-sm">Start</Typography>
        <Group gap={8}>
          <Input
            w={116}
            value={dayjs(start).format('MMM D, YYYY')}
            error={beyondMin || startAfterEnd || beyondDuration}
          />
          <TimeInput
            w={90}
            withSeconds
            value={startTime}
            onChange={(d) => updateTime(d.currentTarget.value, setStart)}
            error={beyondMin || startAfterEnd || beyondDuration}
          />
        </Group>
      </Group>

      <Group gap={0} pt={8} justify="space-between">
        <Typography variant="label-sm">End</Typography>
        <Group gap={8}>
          <Input
            w={116}
            value={dayjs(end).format('MMM D, YYYY')}
            error={beyondMax || startAfterEnd || beyondDuration}
          />
          <TimeInput
            w={90}
            withSeconds
            value={endTime}
            onChange={(d) => updateTime(d.currentTarget.value, setEnd)}
            error={beyondMax || startAfterEnd || beyondDuration}
          />
        </Group>
      </Group>

      <Flex justify="center" pt={8}>
        <DatePicker
          type="range"
          value={displayRangeDate}
          onChange={updateRangeDate}
          maxDate={maxDateTime}
          minDate={minDateTime}
        />
      </Flex>

      {(startAfterEnd || beyondMin || beyondMax || beyondDuration) && (
        <Alert icon={<IconAlertCircle size={16} />} color="red" pt={8}>
          {startAfterEnd && <Text c="red">Please select an end time after the start time.</Text>}
          {beyondMin && (
            <Text c="red">
              Please select a start time after <>{timeFormatter(minDateTime!, null, 'MMM D, YYYY HH:mm:ss')}</>
            </Text>
          )}
          {beyondMax && (
            <Text c="red">
              Please select an end time before <>{timeFormatter(maxDateTime!, null, 'MMM D, YYYY HH:mm:ss')}</>
            </Text>
          )}
          {beyondDuration && (
            <Text c="red">
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
    </Box>
  )
}

export default AbsoluteTimeRangePicker
