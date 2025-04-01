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
  Input,
  DatePickerProps
} from '../../primitive/index.js'
import { dayjs } from '../../utils/dayjs.js'

import { AbsoluteTimeRange, TimeRangeValue, timeFormatter, formatDuration } from './helpers.js'

interface AbsoluteTimeRangePickerProps {
  value?: TimeRangeValue
  minDateTime?: Date
  maxDateTime?: Date
  maxDuration?: number // unit: seconds
  onChange?: (v: AbsoluteTimeRange) => void
  onCancel?: () => void
  onReturnClick?: MouseEventHandler<HTMLElement>

  dateInputFormat?: (date: Date) => string
  datePickerProps?: DatePickerProps<'range'>
  localization?: Localization
}

export interface Localization {
  entry?: string
  back?: string
  start?: string
  end?: string
  apply?: string
  cancel?: string

  errors?: {
    startAfterEnd?: string
    beyondMin?: (min: Date) => string
    beyondMax?: (max: Date) => string
    beyondDuration?: (duration: number) => string
  }
}

const AbsoluteTimeRangePicker = ({
  value,
  maxDateTime,
  minDateTime,
  maxDuration,
  onChange,
  onCancel,
  onReturnClick,
  dateInputFormat,
  datePickerProps,
  localization
}: AbsoluteTimeRangePickerProps) => {
  const [start, setStart] = useState(() => (value ? new Date(value[0] * 1000) : null))
  const [end, setEnd] = useState(() => (value ? new Date(value[1] * 1000) : null))
  const startDate = start ? dateInputFormat?.(start) || dayjs(start).format('MMM D, YYYY') : '-'
  const endDate = end ? dateInputFormat?.(end) || dayjs(end).format('MMM D, YYYY') : '-'
  const startTime = start ? dayjs(start).format('HH:mm:ss') : '-'
  const endTime = end ? dayjs(end).format('HH:mm:ss') : '-'

  // validation status
  const isRangeComplete = !!start && !!end
  const startAfterEnd = isRangeComplete && start.valueOf() > end.valueOf()
  const beyondMin = isRangeComplete && minDateTime && start.valueOf() < minDateTime.valueOf()
  const beyondMax = isRangeComplete && maxDateTime && end.valueOf() > maxDateTime.valueOf()
  const beyondDuration = isRangeComplete && !!maxDuration && end.valueOf() - start.valueOf() > maxDuration * 1000

  const [displayRangeDate, setDisplayRangeDate] = useState<[Date | null, Date | null]>([start, end])

  const updateRangeDate = (dates: [Date, Date]) => {
    setDisplayRangeDate(dates)

    const newStart = new Date(dates[0])
    if (start) {
      newStart.setHours(start.getHours())
      newStart.setMinutes(start.getMinutes())
      newStart.setSeconds(start.getSeconds())
    }
    setStart(newStart)

    // to support to select the same day for start and end
    let newEnd = new Date(dates[0])
    if (dates[1]) {
      newEnd = new Date(dates[1])
    }
    if (end) {
      newEnd.setHours(end.getHours())
      newEnd.setMinutes(end.getMinutes())
      newEnd.setSeconds(end.getSeconds())
    }
    setEnd(newEnd)
  }

  const updateTime = (v: string, setter: ReturnType<typeof useState<Date | null>>[1]) => {
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
    <Box p="md" w={280} m={-4}>
      <Group pb="xs" mt={-4} onClick={onReturnClick} sx={{ cursor: 'pointer' }}>
        <IconChevronLeft size={16} />
        <Typography variant="body-lg">{localization?.back || 'Back'}</Typography>
      </Group>

      <Group gap={0} pt={8} justify="space-between">
        <Typography variant="label-sm">{localization?.start || 'Start'}</Typography>
        <Group gap={8}>
          <Input w={116} value={startDate} error={beyondMin || startAfterEnd || beyondDuration} />
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
        <Typography variant="label-sm">{localization?.end || 'End'}</Typography>
        <Group gap={8}>
          <Input w={116} value={endDate} error={beyondMax || startAfterEnd || beyondDuration} />
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
          {...datePickerProps}
          type="range"
          value={displayRangeDate}
          onChange={updateRangeDate}
          maxDate={maxDateTime}
          minDate={minDateTime}
        />
      </Flex>

      {(startAfterEnd || beyondMin || beyondMax || beyondDuration) && (
        <Alert icon={<IconAlertCircle size={16} />} color="red" pt={8}>
          {startAfterEnd && (
            <Text c="red">
              {localization?.errors?.startAfterEnd || 'Please select an end time after the start time.'}
            </Text>
          )}
          {beyondMin && (
            <Text c="red">
              {localization?.errors?.beyondMin?.(minDateTime!) ||
                `Please select a start time after ${timeFormatter(minDateTime!, null, 'MMM D, YYYY HH:mm:ss')}`}
            </Text>
          )}
          {beyondMax && (
            <Text c="red">
              {localization?.errors?.beyondMax?.(maxDateTime!) ||
                `Please select an end time before ${timeFormatter(maxDateTime!, null, 'MMM D, YYYY HH:mm:ss')}`}
            </Text>
          )}
          {beyondDuration && (
            <Text c="red">
              {localization?.errors?.beyondDuration?.(maxDuration!) ||
                `The selection exceeds the ${formatDuration(maxDuration!)} limit, please select a shorter time range.`}
            </Text>
          )}
        </Alert>
      )}

      <Flex pt={8} gap="xs" justify="flex-end" align="flex-start" direction="row" wrap="wrap">
        <Button size="xs" variant="default" onClick={onCancel}>
          {localization?.cancel || 'Cancel'}
        </Button>
        <Button
          size="xs"
          onClick={apply}
          disabled={!start || !end || startAfterEnd || beyondMin || beyondMax || beyondDuration}
        >
          {localization?.apply || 'Apply'}
        </Button>
      </Flex>
    </Box>
  )
}

export default AbsoluteTimeRangePicker
