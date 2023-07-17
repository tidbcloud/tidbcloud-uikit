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
  useMantineTheme,
  Sx
} from '@tidb-cloud-uikit/components'
import { Calendar, TimeInput, MonthSettings } from '@tidb-cloud-uikit/dates'
import { useDisclosure } from '@tidb-cloud-uikit/hooks'
import { Icon } from '@tidb-cloud-uikit/icons'
import { useMemoizedFn, useUpdateEffect } from 'ahooks'
import type { Dayjs } from 'dayjs'
import dayjs from 'dbaas/components/dayjs'
import Link from 'dbaas/components/Link'
import { DEFAULT_TIME_FORMAT } from 'dbaas/utils/format'
import { useState, CSSProperties, useMemo } from 'react'

import { useTimePickerScroll } from './usePickerScroll'

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
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  placeholder = 'Select time',
  format = DEFAULT_TIME_FORMAT,
  defaultValue,
  value,
  startDate = dayjs().subtract(10, 'year').toDate(),
  endDate = dayjs().add(10, 'year').toDate(),
  onChange,
  disable = false,
  utcOffset = dayjs().utcOffset(),
  withinPortal = false,
  sx,
  loading = false
}) => {
  const [opened, { close, open }] = useDisclosure(false)

  const theme = useMantineTheme()
  const dayStyle: MonthSettings['dayStyle'] = (_date, modifiers) =>
    (modifiers.weekend && !modifiers.disabled && !modifiers.selected && !modifiers.outside && !modifiers.selectedInRange
      ? { color: theme.colors.gray[7] }
      : null) as CSSProperties
  const iconColor = theme.colors.gray[5]

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
          rightSection={loading ? <Loader size="xs" /> : <Icon name="Clock" size={18} color={iconColor} />}
          onClick={open}
          sx={sx}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <Group align="flex-start">
            <Calendar
              dayStyle={dayStyle}
              minDate={startDate}
              maxDate={endDate}
              value={currentValue.toDate()}
              onChange={calendarChange}
              size="xs"
            />

            <Divider orientation="vertical" mt={-12} mb={-16} />

            <Stack justify="flex-start">
              <TimeInput w={192} withSeconds value={currentValue.toDate()} onChange={timeInputChange} />

              <Box
                pos="relative"
                fz={14}
                fw={400}
                h={224}
                sx={(theme) => ({ color: theme.colors.gray[7], overflow: 'hidden', zIndex: 9999 })}
              >
                <Box
                  bg="gray.3"
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h={32}
                  sx={(theme) => ({ zIndex: -1, borderRadius: theme.defaultRadius, pointerEvents: 'none' })}
                />
                <Flex mah="100%">{scroll.content}</Flex>
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
              from your{' '}
              <Typography component={Link} to="/console/preferences/timezone" color="cyan">
                time zone
              </Typography>
            </Typography>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  )
}
