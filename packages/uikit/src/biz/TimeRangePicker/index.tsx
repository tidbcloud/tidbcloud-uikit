import { useHover } from '@mantine/hooks'
import { useMemo, useState } from 'react'

import { IconChevronRight, IconChevronSelectorVertical, IconX } from '../../icons/index.js'
import { Button, Menu, Text, Box, Tooltip, Group, Typography, ButtonProps, ActionIcon } from '../../primitive/index.js'

import AbsoluteTimeRangePicker from './AbsoluteTimeRangePicker.js'
import { DEFAULT_QUICK_RANGES, TimeRange, formatDuration, toTimeRangeValue, timeFormatter } from './helpers.js'

export type TimeRangePickerProps = TimeRangePickerBaseProps &
  (
    | { clearable: true; value?: TimeRange; onChange?: (value?: TimeRange) => void }
    | { clearable?: false; value: TimeRange; onChange?: (value: TimeRange) => void }
  )

export interface TimeRangePickerBaseProps extends ButtonProps {
  loading?: boolean
  placeholder?: string
  clearable?: boolean

  minDateTime?: () => Date
  maxDateTime?: () => Date
  maxDuration?: number // unit: seconds

  // quick range selection items, Last x mins, Last x hours...
  // unit: seconds.
  quickRanges?: number[]
  disableAbsoluteRanges?: boolean

  timezone?: number
}

export const TimeRangePicker = ({
  value,
  minDateTime,
  maxDateTime,
  maxDuration,
  disableAbsoluteRanges = false,
  onChange,
  quickRanges = DEFAULT_QUICK_RANGES,
  loading,
  placeholder,
  clearable,
  timezone,
  sx
}: React.PropsWithChildren<TimeRangePickerProps>) => {
  const [opened, setOpened] = useState(false)
  const [customMode, setCustomMode] = useState(false)
  const isEmptyValue = !value
  const isRelativeRange = value?.type === 'relative'
  const { hovered, ref: targetRef } = useHover()

  const timeRangeValue = isEmptyValue ? undefined : toTimeRangeValue(value)
  const duration = isEmptyValue ? undefined : timeRangeValue![1] - timeRangeValue![0]
  const selectedRelativeItem = useMemo(() => {
    if (!value || value.type === 'absolute') {
      return
    }
    return quickRanges.find((it) => it === value.value)
  }, [quickRanges, value])

  const formattedAbsDateTime = useMemo(() => {
    if (!timeRangeValue) {
      return ''
    }

    return `${timeFormatter(timeRangeValue[0], timezone ?? null, 'MMM D, YYYY HH:mm')} - ${timeFormatter(
      timeRangeValue[1],
      timezone ?? null,
      'MMM D, YYYY HH:mm'
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
        <Tooltip label={formattedAbsDateTime} disabled={isRelativeRange || isEmptyValue} withArrow>
          <Button
            ref={targetRef}
            variant="default"
            bg="carbon.0"
            styles={(theme) => ({
              root: {
                paddingLeft: '12px',
                paddingRight: '12px',
                borderColor: opened ? theme.colors.carbon[9] : theme.colors.carbon[4],
                '&:hover': {
                  backgroundColor: theme.colors.carbon[0],
                  borderColor: opened ? theme.colors.carbon[9] : theme.colors.carbon[5]
                },
                '&:active': { transform: 'none' }
              },
              inner: {
                width: '100%'
              },
              label: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                fontWeight: 400
              }
            })}
            w={disableAbsoluteRanges ? 200 : 280}
            sx={sx}
            loading={loading}
            rightSection={
              clearable && !!value && hovered ? (
                <ActionIcon
                  size="xs"
                  onClick={(e) => {
                    e.stopPropagation()
                    onChange?.()
                  }}
                >
                  <IconX size={16} color="var(--mantine-color-carbon-7)!important" />
                </ActionIcon>
              ) : (
                <IconChevronSelectorVertical size={16} color="var(--mantine-color-carbon-7)!important" />
              )
            }
          >
            <Group w="100%" gap={0}>
              <Box sx={{ flex: 'none' }}>
                <DurationBadge>{isEmptyValue ? 'All' : formatDuration(duration!, true)}</DurationBadge>
              </Box>
              <Text
                px={8}
                sx={{
                  flex: '1 1',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  textAlign: 'left'
                }}
                c={isEmptyValue ? 'dimmed' : 'carbon.8'}
              >
                {isEmptyValue
                  ? placeholder || 'Time Range'
                  : isRelativeRange
                    ? `Past ${formatDuration(duration!)}`
                    : formattedAbsDateTime}
              </Text>
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
                    background: seconds === selectedRelativeItem ? theme.colors.carbon[3] : ''
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

const DurationBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display="inline-block"
      w={35}
      py={3}
      bg="carbon.3"
      c="carbon.8"
      fz={10}
      lh="14px"
      ta="center"
      sx={{ borderRadius: 8 }}
    >
      {children}
    </Box>
  )
}

export * from './helpers.js'
