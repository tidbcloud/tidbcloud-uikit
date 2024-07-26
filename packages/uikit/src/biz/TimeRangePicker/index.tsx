import { useMemo, useState } from 'react'

import { IconChevronRight } from '../../icons/index.js'
import { Button, Menu, SelectChevronIcon, Text, Box, Tooltip, Group, Typography } from '../../primitive/index.js'

import AbsoluteTimeRangePicker from './AbsoluteTimeRangePicker.js'
import { DEFAULT_QUICK_RANGES, TimeRange, formatDuration, toTimeRangeValue, timeFormatter } from './helpers.js'

export interface TimeRangePickerProps {
  value: TimeRange
  onChange?: (value: TimeRange) => void

  loading?: boolean

  minDateTime?: () => Date
  maxDateTime?: () => Date
  maxDuration?: number // unit: seconds

  // quick range selection items, Last x mins, Last x hours...
  // unit: seconds.
  quickRanges?: number[]
  disableAbsoluteRanges?: boolean

  timezone?: number
}

export const TimeRangePicker: React.FC<React.PropsWithChildren<TimeRangePickerProps>> = ({
  value,
  minDateTime,
  maxDateTime,
  maxDuration,
  disableAbsoluteRanges = false,
  onChange,
  quickRanges = DEFAULT_QUICK_RANGES,
  loading,
  timezone
}) => {
  const [opened, setOpened] = useState(false)
  const [customMode, setCustomMode] = useState(false)
  const isRelativeRange = value?.type === 'relative'
  const timeRangeValue = toTimeRangeValue(value)
  const duration = timeRangeValue[1] - timeRangeValue[0]
  const selectedRelativeItem = useMemo(() => {
    if (value.type === 'absolute') {
      return
    }
    return quickRanges.find((it) => it === value.value)
  }, [quickRanges, value])

  const formattedAbsDateTime = useMemo(() => {
    return `${timeFormatter(timeRangeValue[0], timezone || null, 'MMM D, YYY HH:mm')} - ${timeFormatter(
      timeRangeValue[1],
      timezone || null,
      'MMM D, YYY HH:mm'
    )}`
  }, [timeRangeValue])

  return (
    <Menu
      shadow="md"
      width={customMode ? 'auto' : disableAbsoluteRanges ? 200 : 280}
      position="bottom-end"
      opened={opened}
      onOpen={() => {
        setOpened(true)
        setCustomMode(false)
      }}
      onClose={() => setOpened(false)}
    >
      <Menu.Target>
        <Tooltip label={formattedAbsDateTime} disabled={isRelativeRange} withArrow>
          <Button
            variant="default"
            styles={(theme) => ({
              root: {
                paddingLeft: '12px',
                paddingRight: '12px',
                borderColor: opened ? theme.colors.blue[7] : '',
                '&:hover': {
                  background: 'transparent'
                }
              },
              inner: {
                width: '100%'
              },
              label: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
              }
            })}
            w={disableAbsoluteRanges ? 200 : 280}
            fw="normal"
            {...(loading ? { 'data-loading': true } : {})}
          >
            <Group w="100%" spacing={0}>
              <div className="wd-flex-none">
                <DurationBadge>{formatDuration(duration, true)}</DurationBadge>
              </div>
              <Text className="wd-flex-1 wd-truncate wd-px-2">
                {isRelativeRange ? `Past ${formatDuration(duration)}` : formattedAbsDateTime}
              </Text>
              <div className="wd-flex-none">
                <SelectChevronIcon className="wd-flex-none" size="md" error={false} />
              </div>
            </Group>
          </Button>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        {customMode ? (
          <AbsoluteTimeRangePicker
            value={timeRangeValue}
            minDateTime={minDateTime?.()}
            maxDateTime={maxDateTime?.()}
            maxDuration={maxDuration}
            onChange={(v) => {
              onChange?.(v)
              setOpened(false)
            }}
            onCancel={() => setOpened(false)}
            onReturnClick={() => setCustomMode(false)}
          />
        ) : (
          <>
            {!disableAbsoluteRanges && (
              <>
                <Menu.Item
                  rightSection={<IconChevronRight size={16} />}
                  closeMenuOnClick={false}
                  onClick={() => setCustomMode(true)}
                >
                  <Typography variant="body-lg">Custom</Typography>
                </Menu.Item>

                <Menu.Divider />
              </>
            )}

            <>
              {quickRanges.map((seconds) => (
                <Menu.Item
                  key={seconds}
                  sx={(theme) => ({
                    background: seconds === selectedRelativeItem ? theme.colors.gray[2] : ''
                  })}
                  onClick={() => onChange?.({ type: 'relative', value: seconds })}
                >
                  <Text>Past {formatDuration(seconds)}</Text>
                </Menu.Item>
              ))}
            </>
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  )
}

const DurationBadge: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Box
      display="inline-block"
      w={35}
      py={3}
      bg="gray.4"
      c="gray.7"
      fz={10}
      lh="14px"
      ta="center"
      className="wd-rounded-lg"
    >
      {children}
    </Box>
  )
}
