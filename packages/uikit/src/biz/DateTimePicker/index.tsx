import { useMemoizedFn } from 'ahooks'
import { useMemo, useState } from 'react'

import { useDisclosure, useUncontrolled } from '../../hooks/index.js'
import { IconClock } from '../../icons/index.js'
import {
  Box,
  DatePicker,
  Divider,
  Flex,
  Group,
  Loader,
  MantineSize,
  Popover,
  PopoverProps,
  Stack,
  TextInput,
  TimeInput,
  TimeInputProps
} from '../../primitive/index.js'
import { dayjs, type Dayjs } from '../../utils/dayjs.js'
import { DEFAULT_TIME_FORMAT } from '../TimeRangePicker/helpers.js'

import { CurrentValueChangedBy, TimeScollerPicker } from './TimeScollerPicker.js'
import { DateTimePickerProps } from './types.js'

export type { DateTimePickerProps } from './types.js'

export { useDateTimePicker } from './helpers.js'

const getInitialCalendarDate = (currentDay: Dayjs) =>
  currentDay.date() === currentDay.daysInMonth() ? currentDay.add(1, 'month') : currentDay

export const DateTimePicker = ({
  placeholder = 'Select time',
  format = DEFAULT_TIME_FORMAT,
  formatter,
  defaultValue,
  value,
  today = new Date(),
  futureOnly = false,
  startDate = dayjs().subtract(10, 'year').toDate(),
  endDate = dayjs().add(10, 'year').toDate(),
  onChange,
  disable = false,
  withinPortal = true,
  sx,
  loading = false,
  size,
  footer
}: DateTimePickerProps) => {
  const [opened, { close, open }] = useDisclosure(false)
  const currentDay = dayjs(today).startOf('day')
  const minimumDate = futureOnly ? dayjs.max(dayjs(startDate), dayjs(today)) : dayjs(startDate)
  const initialCalendarDate = getInitialCalendarDate(currentDay)
  const [calendarDate, setCalendarDate] = useState(initialCalendarDate.toDate())
  const [currentValue, setCurrentValue] = useUncontrolled({
    value: value ? dayjs(value) : undefined,
    defaultValue: defaultValue ? dayjs(defaultValue) : dayjs(),
    onChange: (v) => {
      onChange?.(v.toDate())
    }
  })
  const [currentValueChangedBy, setCurrentValueChangedBy] = useState<CurrentValueChangedBy | null>(null)

  const updateCurrentValue = useMemoizedFn((val: Dayjs, from: typeof currentValueChangedBy) => {
    let next = val

    if (!next.isValid()) {
      return
    }

    if (currentValue?.unix() === next.unix()) {
      return
    }

    if (next.isBefore(minimumDate)) {
      next = minimumDate
    } else if (endDate && next.isAfter(endDate)) {
      next = dayjs(endDate)
    }

    setCurrentValue(next)
    setCurrentValueChangedBy(from)
    setTimeout(() => {
      setCurrentValueChangedBy(null)
    }, 20)
  })

  const inputStr = formatter ? formatter(currentValue.toDate()) : currentValue.format(format)
  const utcStr = useMemo(() => {
    const utcOffset = currentValue.utcOffset()
    const h = Math.floor(utcOffset / 60)
    const m = utcOffset % 60
    return `UTC${h >= 0 ? '+' : '-'}${Math.abs(h)}:${m < 10 ? '0' : ''}${m}`
  }, [])

  const calendarChange = useMemoizedFn((v: Date) => {
    let next = currentValue
    next = next.year(v.getFullYear()).month(v.getMonth()).date(v.getDate())

    if (futureOnly) {
      setCalendarDate(v)
    }
    updateCurrentValue(next, 'calendar')
  })

  const timeInputChange = useMemoizedFn((e: React.ChangeEvent<HTMLInputElement>) => {
    const originVal = e.currentTarget.value
    const v = dayjs(originVal, 'HH:mm:ss').toDate()

    let next = currentValue
    next = next.hour(v.getHours()).minute(v.getMinutes()).second(v.getSeconds())

    updateCurrentValue(next, 'timeInput')
  })

  const timeScrollPickerChange = useMemoizedFn((v: [number, number, number]) => {
    const [h, m, s] = v
    let next = currentValue
    next = next.hour(h).minute(m).second(s)
    updateCurrentValue(next, 'timeScroller')
  })

  return (
    <Popover
      position="bottom-end"
      opened={opened}
      withinPortal={withinPortal}
      shadow="md"
      closeOnClickOutside
      onChange={(opened) => {
        if (opened) {
          if (futureOnly) {
            setCalendarDate(getInitialCalendarDate(currentDay).toDate())
          }
          open()
        } else {
          close()
        }
      }}
    >
      <Popover.Target>
        <TextInput
          readOnly
          disabled={disable}
          placeholder={placeholder}
          value={inputStr}
          rightSection={loading ? <Loader size="xs" /> : <Box component={IconClock} size={18} c="carbon.6" />}
          sx={sx}
          size={size}
          onClick={open}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <Group align="flex-start">
            <DatePicker
              date={futureOnly ? calendarDate : undefined}
              onDateChange={futureOnly ? setCalendarDate : undefined}
              minDate={futureOnly ? minimumDate.startOf('day').toDate() : startDate}
              maxDate={endDate}
              getDayProps={
                futureOnly
                  ? (date) => {
                      const day = dayjs(date)
                      const isCurrentDay = day.isSame(currentDay, 'day')
                      const isSelected = day.isSame(currentValue, 'day')

                      return {
                        style:
                          isCurrentDay && !isSelected
                            ? {
                                border: '1px solid var(--mantine-color-carbon-8)',
                                color: 'var(--mantine-color-carbon-8)',
                                opacity: 1
                              }
                            : undefined
                      }
                    }
                  : undefined
              }
              value={currentValue.toDate()}
              onChange={calendarChange}
              withCellSpacing={false}
              size="sm"
              styles={
                futureOnly
                  ? (theme) => ({
                      day: {
                        '&[data-disabled]': {
                          color: `${theme.colors.carbon[4]} !important`,
                          opacity: 1
                        },
                        '&[data-outside]': {
                          color: theme.colors.carbon[6],
                          opacity: 1
                        },
                        '&[data-today]:not([data-selected])': {
                          border: 0
                        },
                        '&[data-selected]': {
                          backgroundColor: theme.colors.carbon[8],
                          color: theme.white
                        }
                      }
                    })
                  : undefined
              }
            />

            <Divider orientation="vertical" mt={-12} mb={-16} />

            <Stack justify="flex-start">
              <TimeInput
                withSeconds
                value={currentValue.format('HH:mm:ss')}
                onChange={timeInputChange}
                size="md"
                w={112}
                styles={{
                  input: {
                    '--input-size': '32px!important',
                    '--input-height': '32px!important',
                    '--input-line-height': '30px!important',
                    fontVariantNumeric: 'tabular-nums',
                    '&::-webkit-datetime-edit-fields-wrapper': {
                      display: 'flex',
                      justifyContent: 'space-between'
                    }
                  }
                }}
              />

              <Box
                pos="relative"
                fz={14}
                fw={400}
                h={224}
                sx={(theme) => ({ color: theme.colors.carbon[8], overflow: 'hidden', zIndex: 9999 })}
              >
                <Flex mah="100%" gap={8}>
                  <Box
                    bg="carbon.3"
                    pos="absolute"
                    top={0}
                    left={0}
                    h={32}
                    w={32}
                    sx={(theme) => ({ zIndex: -1, borderRadius: theme.defaultRadius, pointerEvents: 'none' })}
                  />
                  <Box
                    bg="carbon.3"
                    pos="absolute"
                    top={0}
                    left={40}
                    h={32}
                    w={32}
                    sx={(theme) => ({ zIndex: -1, borderRadius: theme.defaultRadius, pointerEvents: 'none' })}
                  />
                  <Box
                    bg="carbon.3"
                    pos="absolute"
                    top={0}
                    left={80}
                    h={32}
                    w={32}
                    sx={(theme) => ({ zIndex: -1, borderRadius: theme.defaultRadius, pointerEvents: 'none' })}
                  />
                </Flex>
                <TimeScollerPicker
                  currentValue={currentValue}
                  currentValueChangedBy={currentValueChangedBy}
                  onChange={timeScrollPickerChange}
                  start={minimumDate.toDate()}
                  end={endDate}
                />
              </Box>
            </Stack>
          </Group>
          {footer && (
            <>
              <Divider mx={-16} />
              {footer}
            </>
          )}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  )
}

export interface TimePickerProps
  extends Omit<TimeInputProps, 'value' | 'onChange' | 'defaultValue'>,
    Pick<PopoverProps, 'withinPortal' | 'withArrow' | 'position' | 'shadow'> {
  defaultValue?: string
  /**
   * with format of `HH:mm:ss`
   */
  value?: string
  onChange?: (val: string) => void
  disable?: boolean
  size?: MantineSize
}

export const TimePicker = ({
  value,
  onChange,
  defaultValue,
  disable = false,
  sx,
  size,
  minTime,
  maxTime,
  withinPortal,
  withArrow,
  position,
  shadow,
  ...rest
}: TimePickerProps) => {
  const [currentValue, setCurrentValue] = useUncontrolled({
    value: value ? dayjs(value, 'HH:mm:ss') : undefined,
    defaultValue: defaultValue ? dayjs(defaultValue, 'HH:mm:ss') : dayjs(),
    onChange: (v) => {
      onChange?.(v.format('HH:mm:ss'))
    }
  })
  const [currentValueChangedBy, setCurrentValueChangedBy] = useState<CurrentValueChangedBy | null>(null)
  const startDate = useMemo(() => dayjs(minTime, 'HH:mm:ss'), [minTime])
  const endDate = useMemo(() => dayjs(maxTime, 'HH:mm:ss'), [maxTime])

  const updateCurrentValue = useMemoizedFn((val: Dayjs, from: typeof currentValueChangedBy) => {
    let next = val

    if (!next.isValid()) {
      return
    }

    if (currentValue?.unix() === next.unix()) {
      return
    }

    // For time-only comparison, use same date for accurate comparison
    const baseDate = next.format('YYYY-MM-DD')

    if (startDate && startDate.isValid()) {
      // Set startDate to the same date as next for time-only comparison
      const startOnSameDate = dayjs(`${baseDate} ${startDate.format('HH:mm:ss')}`)
      if (next.isBefore(startOnSameDate)) {
        next = next.hour(startDate.hour()).minute(startDate.minute()).second(startDate.second())
      }
    }

    if (endDate && endDate.isValid()) {
      // Set endDate to the same date as next for time-only comparison
      const endOnSameDate = dayjs(`${baseDate} ${endDate.format('HH:mm:ss')}`)
      if (next.isAfter(endOnSameDate)) {
        next = next.hour(endDate.hour()).minute(endDate.minute()).second(endDate.second())
      }
    }

    setCurrentValue(next)
    setCurrentValueChangedBy(from)
    setTimeout(() => {
      setCurrentValueChangedBy(null)
    }, 20)
  })

  const timeInputChange = useMemoizedFn((e: React.ChangeEvent<HTMLInputElement>) => {
    const originVal = e.currentTarget.value
    const v = dayjs(originVal, 'HH:mm:ss').toDate()

    let next = currentValue
    next = next.hour(v.getHours()).minute(v.getMinutes()).second(v.getSeconds())

    updateCurrentValue(next, 'timeInput')
  })

  const timeScrollPickerChange = useMemoizedFn((v: [number, number, number]) => {
    const [h, m, s] = v
    let next = currentValue
    next = next.hour(h).minute(m).second(s)
    updateCurrentValue(next, 'timeScroller')
  })

  return (
    <Popover withinPortal={withinPortal} withArrow={withArrow} position={position} shadow={shadow}>
      <Popover.Target>
        <TimeInput
          {...rest}
          disabled={disable}
          withSeconds
          value={currentValue.format('HH:mm:ss')}
          onChange={timeInputChange}
          size={size}
          sx={sx}
          rightSection={<IconClock size={16} c="carbon.7" />}
        />
      </Popover.Target>

      <Popover.Dropdown>
        <Box
          pos="relative"
          fz={14}
          fw={400}
          h={224}
          sx={(theme) => ({ color: theme.colors.carbon[8], overflow: 'hidden', zIndex: 9999 })}
        >
          <Flex mah="100%" gap={8}>
            <Box
              bg="carbon.3"
              pos="absolute"
              top={0}
              left={0}
              h={32}
              w={32}
              sx={(theme) => ({ zIndex: -1, borderRadius: theme.defaultRadius, pointerEvents: 'none' })}
            />
            <Box
              bg="carbon.3"
              pos="absolute"
              top={0}
              left={40}
              h={32}
              w={32}
              sx={(theme) => ({ zIndex: -1, borderRadius: theme.defaultRadius, pointerEvents: 'none' })}
            />
            <Box
              bg="carbon.3"
              pos="absolute"
              top={0}
              left={80}
              h={32}
              w={32}
              sx={(theme) => ({ zIndex: -1, borderRadius: theme.defaultRadius, pointerEvents: 'none' })}
            />
          </Flex>
          <TimeScollerPicker
            currentValue={currentValue}
            currentValueChangedBy={currentValueChangedBy}
            onChange={timeScrollPickerChange}
            start={startDate.toDate()}
            end={endDate.toDate()}
          />
        </Box>
      </Popover.Dropdown>
    </Popover>
  )
}
