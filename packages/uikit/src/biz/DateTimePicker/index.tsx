import { useMemoizedFn, useUpdateEffect } from 'ahooks'
import type { Dayjs } from 'dayjs'
import { useState, useMemo } from 'react'

import { useDisclosure } from '../../hooks/index.js'
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
  Sx,
  MantineSize,
  Calendar,
  TimeInput
} from '../../primitive/index.js'
import { dayjs } from '../../utils/dayjs.js'
import { DEFAULT_TIME_FORMAT } from '../TimeRangePicker/helpers.js'

import { useTimePickerScroll } from './usePickerScroll.js'

export interface DateTimePickerProps {
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
  sx?: Sx
  loading?: boolean
  size?: MantineSize
}

export const DateTimePicker: React.FC<React.PropsWithChildren<DateTimePickerProps>> = ({
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
}) => {
  const [opened, { close, open }] = useDisclosure(false)
  const [currentValue, setCurrentValue] = useState<Dayjs>(
    defaultValue ? dayjs(defaultValue) : value ? dayjs(value) : dayjs()
  )

  const updateCurrentValue = useMemoizedFn((val: Dayjs) => {
    setCurrentValue(val)
    onChange?.(val.toDate())
  })

  const inputStr = currentValue.format(format)

  const utcStr = useMemo(() => {
    const h = Math.floor(utcOffset / 60)
    const m = utcOffset % 60
    return `UTC${h >= 0 ? '+' : '-'}${Math.abs(h)}:${m < 10 ? '0' : ''}${m}`
  }, [utcOffset])

  const scroll = useTimePickerScroll(currentValue, opened, startDate, endDate, utcOffset)

  const calendarChange = useMemoizedFn((v: Date) => {
    let next = currentValue
    next = next.utcOffset(utcOffset).year(v.getFullYear()).month(v.getMonth()).date(v.getDate())
    if (currentValue?.unix() !== next.unix()) {
      updateCurrentValue(next)
    }
  })

  const timeInputChange = useMemoizedFn((v: Date) => {
    let next = currentValue
    next = next.utcOffset(utcOffset).hour(v.getHours()).minute(v.getMinutes()).second(v.getSeconds())

    if (startDate && next.valueOf() < startDate.valueOf()) {
      updateCurrentValue(dayjs(startDate))
    } else if (endDate && next.valueOf() > endDate.valueOf()) {
      updateCurrentValue(dayjs(endDate))
    } else if (currentValue?.unix() !== next.unix()) {
      updateCurrentValue(next)
    }
  })

  // user make changes from scroll picker
  useUpdateEffect(() => {
    let next = currentValue
    const [h, m, s] = scroll.value
    next = next.utcOffset(utcOffset).hour(h).minute(m).second(s)
    if (currentValue?.unix() !== next.unix()) {
      updateCurrentValue(next)
    }
  }, [scroll.value])

  useUpdateEffect(() => {
    if (value && dayjs(value).unix() !== currentValue.unix()) {
      updateCurrentValue(dayjs(value))
    }
  }, [value])

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
            <Calendar
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
                weekdayCell: {
                  height: 32,
                  width: 32,
                  lineHeight: '32px'
                },
                month: {
                  '& thead tr': {
                    display: 'flex',
                    gap: 8
                  },
                  '& tbody tr': {
                    display: 'flex',
                    gap: 8
                  }
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
                w={112}
                withSeconds
                value={currentValue.toDate()}
                onChange={timeInputChange}
                size="sm"
                styles={{
                  controls: {
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
                <Flex mah="100%" gap={8}>
                  {scroll.content}
                </Flex>
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
