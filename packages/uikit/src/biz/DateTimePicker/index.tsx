import { useMemoizedFn } from 'ahooks'
import type { Dayjs } from 'dayjs'
import { useMemo, useState } from 'react'

import { useDisclosure, useUncontrolled } from '../../hooks/index.js'
import { IconClock } from '../../icons/index.js'
import {
  Box,
  Divider,
  Flex,
  Group,
  Loader,
  Popover,
  Stack,
  TextInput,
  Typography,
  MantineSize,
  TimeInput,
  TextInputProps,
  DatePicker
} from '../../primitive/index.js'
import { dayjs } from '../../utils/dayjs.js'
import { DEFAULT_TIME_FORMAT } from '../TimeRangePicker/helpers.js'

import { TimeScollerPicker, CurrentValueChangedBy } from './TimeScollerPicker.js'

export interface DateTimePickerProps extends Omit<TextInputProps, 'value' | 'onChange' | 'defaultValue'> {
  placeholder?: string
  format?: string

  utcOffset?: number
  defaultValue?: Date
  value?: Date
  startDate?: Date
  endDate?: Date
  onChange?: (val: Date) => void

  disable?: boolean
  withinPortal?: boolean
  loading?: boolean
  size?: MantineSize
}

export const DateTimePicker = ({
  placeholder = 'Select time',
  format = DEFAULT_TIME_FORMAT,
  defaultValue,
  value,
  startDate = dayjs().subtract(10, 'year').toDate(),
  endDate = dayjs().add(10, 'year').toDate(),
  onChange,
  disable = false,
  utcOffset = dayjs().utcOffset(),
  withinPortal = true,
  sx,
  loading = false,
  size
}: DateTimePickerProps) => {
  const [opened, { close, open }] = useDisclosure(false)
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

    if (currentValue?.unix() === next.unix()) {
      return
    }

    if (startDate && next.valueOf() < startDate.valueOf()) {
      next = dayjs(startDate)
    } else if (endDate && next.valueOf() > endDate.valueOf()) {
      next = dayjs(endDate)
    }

    setCurrentValue(next)
    setCurrentValueChangedBy(from)
    setTimeout(() => {
      setCurrentValueChangedBy(null)
    }, 20)
  })

  const inputStr = currentValue.format(format)

  const utcStr = useMemo(() => {
    const h = Math.floor(utcOffset / 60)
    const m = utcOffset % 60
    return `UTC${h >= 0 ? '+' : '-'}${Math.abs(h)}:${m < 10 ? '0' : ''}${m}`
  }, [utcOffset])

  const calendarChange = useMemoizedFn((v: Date) => {
    let next = currentValue
    next = next.utcOffset(utcOffset).year(v.getFullYear()).month(v.getMonth()).date(v.getDate())

    updateCurrentValue(next, 'calendar')
  })

  const timeInputChange = useMemoizedFn((e: React.ChangeEvent<HTMLInputElement>) => {
    const originVal = e.currentTarget.value
    const v = dayjs(originVal, 'HH:mm:ss').toDate()

    let next = currentValue
    next = next.utcOffset(utcOffset).hour(v.getHours()).minute(v.getMinutes()).second(v.getSeconds())

    updateCurrentValue(next, 'timeInput')
  })

  const timeScrollPickerChange = useMemoizedFn((v: [number, number, number]) => {
    const [h, m, s] = v
    let next = currentValue
    next = next.utcOffset(utcOffset).hour(h).minute(m).second(s)
    updateCurrentValue(next, 'timeScroller')
  })

  return (
    <Popover position="bottom-end" opened={opened} withinPortal={withinPortal} shadow="md" onClose={close}>
      <Popover.Target>
        <TextInput
          readOnly
          disabled={disable}
          placeholder={placeholder}
          value={inputStr}
          rightSection={loading ? <Loader size="xs" /> : <Box component={IconClock} size={18} c="carbon.6" />}
          onClick={open}
          sx={sx}
          size={size}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <Group align="flex-start">
            <DatePicker
              minDate={startDate}
              maxDate={endDate}
              value={currentValue.toDate()}
              onChange={calendarChange}
              size="sm"
              styles={() => ({
                calendarHeaderLevel: {
                  height: 32
                },
                calendarHeaderControl: {
                  height: 32,
                  width: 32
                },
                weekdaysRow: {
                  display: 'flex',
                  gap: 8
                },
                weekday: {
                  height: 32,
                  width: 32,
                  lineHeight: '32px'
                },
                monthRow: {
                  display: 'flex',
                  gap: 8
                },
                day: {
                  height: 32,
                  width: 32,
                  lineHeight: '32px'
                }
              })}
            />

            <Divider orientation="vertical" mt={-12} mb={-16} />

            <Stack justify="flex-start">
              <TimeInput
                withSeconds
                value={currentValue.format('HH:mm:ss')}
                onChange={timeInputChange}
                size="sm"
                w={112}
                styles={{
                  input: {
                    height: 30
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
                  start={startDate}
                  end={endDate}
                  utcOffset={utcOffset}
                />
              </Box>
            </Stack>
          </Group>
          <Divider mx={-16} />
          <Group>
            <Typography size="sm">
              Use{' '}
              <Typography fw={600} component="span">
                {utcStr}
              </Typography>{' '}
              from your local time zone
            </Typography>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  )
}
