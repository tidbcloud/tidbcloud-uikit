import { Button, Menu, SelectChevronIcon, Text, Box, Tooltip, Group, Typography } from '@tidb-cloud-uikit/components'
import { Icon } from '@tidb-cloud-uikit/icons'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'

import AbsoluteTimeRangePicker from './AbsoluteTimeRangePicker'
import {
  DEFAULT_QUICK_RANGES,
  TimeRange,
  formatDuration,
  toTimeRangeValue,
  DEFAULT_TIME_RANGE,
  TimeRangeValue
} from './helpers'

interface TimeRangePickerProps {
  value?: TimeRange
  loading?: boolean
  minDateTime?: () => Date
  maxDateTime?: () => Date
  disableAbsoluteRanges?: boolean
  // quick range selection items, Last x mins, Last x hours...
  // unit: seconds.
  quickRanges?: number[]
  // emit onChange when clicking the calendar or the input on blur.
  // limit the value of onChange according to the min/max date time.
  onChange?: (value: TimeRange) => void
}

const TimeRangePicker: React.FC<TimeRangePickerProps> = ({
  value: externalValue,
  minDateTime,
  maxDateTime,
  disableAbsoluteRanges = false,
  onChange,
  quickRanges = DEFAULT_QUICK_RANGES,
  loading
}) => {
  const [opened, setOpened] = useState(false)
  const [internalValue, setInternalValue] = useState<TimeRange>(DEFAULT_TIME_RANGE)
  const [customMode, setCustomMode] = useState(false)
  const value = externalValue ?? internalValue
  const onValueChange = (v: TimeRange) => {
    setInternalValue(v)
    onChange?.(v)
  }
  const isRelativeRange = value?.type === 'relative'
  // can be refined by useMemo()
  const timeRangeValue = toTimeRangeValue(value)
  const duration = timeRangeValue[1] - timeRangeValue[0]
  const selectedRelativeItem = useMemo(() => {
    if (value.type === 'absolute') {
      return
    }
    return quickRanges.find((it) => it === value.value)
  }, [quickRanges, value])

  return (
    <Menu
      shadow="md"
      width={customMode ? 'auto' : disableAbsoluteRanges ? 200 : 280}
      position="bottom-end"
      opened={opened}
      onOpen={() => setCustomMode(false)}
      onClose={() => setOpened(false)}
    >
      <Menu.Target>
        <Tooltip label={formatAbsDateTime(timeRangeValue)} disabled={isRelativeRange} withArrow>
          <Button
            variant="default"
            styles={() => ({
              root: {
                paddingLeft: '12px',
                paddingRight: '12px'
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
            onClick={() => setOpened(true)}
            {...(loading ? { 'data-loading': true } : {})}
          >
            <Group w="100%" spacing={0}>
              <div className="wd-flex-none">
                <DurationBadge>{formatDuration(duration, true)}</DurationBadge>
              </div>
              <Text className="wd-flex-1 wd-truncate wd-px-2">
                {isRelativeRange ? `Past ${formatDuration(duration)}` : formatAbsDateTime(timeRangeValue)}
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
            onChange={(v) => {
              onValueChange(v)
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
                  rightSection={<Icon name="ChevronRight" size={16} />}
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
                    background: seconds === selectedRelativeItem ? theme.colors.gray[4] : undefined,
                    ':hover': {
                      background: seconds === selectedRelativeItem ? theme.colors.gray[4] : undefined
                    }
                  })}
                  onClick={() => onValueChange({ type: 'relative', value: seconds })}
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

const formatAbsDateTime = (v: TimeRangeValue) =>
  `${dayjs.unix(v[0]).format('MMM D, YYYY HH:mm')} - ${dayjs.unix(v[1]).format('MMM D, YYYY HH:mm')}`

const DurationBadge: React.FC = ({ children }) => {
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

export default TimeRangePicker
