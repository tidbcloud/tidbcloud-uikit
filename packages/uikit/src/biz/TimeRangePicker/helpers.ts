import { useMemoizedFn } from 'ahooks'
import { trim } from 'lodash-es'
import prettyMs from 'pretty-ms'
import { useMemo } from 'react'

import { dayjs } from '../../utils/dayjs.js'

export type TimeRange = RelativeTimeRange | AbsoluteTimeRange

export interface RelativeTimeRange {
  type: 'relative'
  value: number // unit: seconds
  isFuture?: boolean
  utcOffset?: number | string
}

export interface AbsoluteTimeRange {
  type: 'absolute'
  value: TimeRangeValue // unit: seconds
}

export type TimeRangeValue = [from: number, to: number]

export const DEFAULT_QUICK_RANGES = [
  5 * 60,
  15 * 60,
  30 * 60,
  60 * 60,
  3 * 60 * 60,
  12 * 60 * 60,
  24 * 60 * 60,
  2 * 24 * 60 * 60,
  3 * 24 * 60 * 60
]

export const DEFAULT_TIME_RANGE: TimeRange = {
  type: 'relative',
  value: 30 * 60
}

export const formatDuration = (seconds: number, short = false) => {
  if (short) {
    return prettyMs(seconds * 1000, { compact: true })
  } else {
    return prettyMs(seconds * 1000, { verbose: true })
  }
}

export const toTimeRangeValue = (timeRange: TimeRange, offset = 0): TimeRangeValue => {
  if (timeRange.type === 'absolute') {
    return timeRange.value.map((t) => t + offset) as TimeRangeValue
  } else {
    let now = dayjs().unix()
    if (timeRange.utcOffset) {
      now = dayjs(convertToLocal(dayjs().toDate(), timeRange.utcOffset)).unix()
    }

    return timeRange.isFuture
      ? [now + offset, now + timeRange.value + offset]
      : [now - timeRange.value + offset, now + offset]
  }
}

export function fromTimeRangeValue(v: TimeRangeValue): AbsoluteTimeRange {
  return {
    type: 'absolute',
    value: [...v]
  }
}

export type URLTimeRange = { from: string; to: string }

export const toURLTimeRange = (timeRange: TimeRange): URLTimeRange => {
  if (timeRange.type === 'relative') {
    const isFuture = timeRange.isFuture
    return isFuture ? { from: 'now', to: `${timeRange.value}` } : { from: `${timeRange.value}`, to: 'now' }
  }

  const timeRangeValue = toTimeRangeValue(timeRange)
  return { from: `${timeRangeValue[0]}`, to: `${timeRangeValue[1]}` }
}

export const urlToTimeRange = (urlTimeRange: URLTimeRange): TimeRange => {
  if (urlTimeRange.to === 'now' || urlTimeRange.from === 'now') {
    return { type: 'relative', value: Number(urlTimeRange.from), isFuture: urlTimeRange.from === 'now' }
  }
  return { type: 'absolute', value: [Number(urlTimeRange.from), Number(urlTimeRange.to)] }
}

export const urlToTimeRangeValue = (urlTimeRange: URLTimeRange): TimeRangeValue => {
  return toTimeRangeValue(urlToTimeRange(urlTimeRange))
}

//----------

export const DEFAULT_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export const DEFAULT_TIME_FORMAT_WITH_TIMEZONE = 'YYYY-MM-DD HH:mm:ss Z'

// add utcOffset for date time
export function addOffsetUTC(time: string | number | Date, utcOffset: number) {
  const targetTime = new Date(time)

  // Get the timezone offset from local time in minutes
  const tzDifference = utcOffset * 60 + targetTime.getTimezoneOffset()
  // Convert the offset to milliseconds, add to targetTime, and make a new Date
  return new Date(targetTime.getTime() + tzDifference * 60 * 1000)
}

// display UTC offset
// number: -9, 7, 0, 8.5
export const getUTCString = (offset: number) => {
  const offsetStrs = offset.toString().split('.')

  let mm = '00'
  let hh = ''

  const offsetH = Number.parseInt(offsetStrs[0] || '0')
  const offsetM = Number.parseFloat(`0.${offsetStrs[1]}` || '0') * 60

  hh = Math.abs(offsetH).toString().padStart(2, '0')
  mm = offsetM === 0 ? '00' : offsetM.toString()

  if (offset > 0) {
    return `UTC+${hh}:${mm}`
  }
  if (offset < 0) {
    return `UTC-${hh}:${mm}`
  }

  return 'UTC±00:00'
}

export const timeFormatter = (
  timeValue: number | string | Date,
  utcOffset?: number | null,
  format = DEFAULT_TIME_FORMAT
) => {
  // null, undefined, 0, ''
  if (!timeValue) return '-'
  // convert unix timestamp number/string(seconds) to milliseconds
  // time schema in billing services is unix timestamp string, such as: { time: "1602201600" }
  const time = timeValue instanceof Date || isNaN(Number(timeValue)) ? timeValue : Number(timeValue) * 1000
  // use a localized timezone of the user agent(browser) if utcOffset is unavailable
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
  const currentTZOffsetInHours =
    utcOffset === undefined || utcOffset === null ? -(new Date().getTimezoneOffset() / 60) : utcOffset
  const withUTC = format.indexOf('Z') >= 0 // display UTC offset

  // use a specific timezone with utcOffset
  // use customized UTC offset display format, like Dec 14, 2021 08:03 UTC+08:00
  return (
    dayjs(addOffsetUTC(time, currentTZOffsetInHours)).format(withUTC ? trim(format, 'Z') : format) +
    (withUTC ? getUTCString(currentTZOffsetInHours) : '')
  )
}

// Hook for timezone-aware TimeRangePicker
export interface UseTimeRangePickerProps {
  value: TimeRange
  onChange?: (value?: TimeRange) => void
  minDateTime?: () => Date
  maxDateTime?: () => Date
  maxDuration?: number
  relativeFormatter?: (relativeRange: RelativeTimeRange) => string
  absoluteFormatter?: (absoluteRange: AbsoluteTimeRange) => string
  dateInputFormat?: (date: Date) => string
  /**
   * the UTC offset in minutes.
   * User selected time will be treated as time in that timezone
   * If the input is less than 16 and greater than -16, it will interpret your input as hours instead.
   * It also can be a string like '+09:00' or '-01:00'
   * @see https://day.js.org/docs/en/manipulate/utc-offset
   */
  utcOffset?: number | string
}

const convertToLocal = (date: Date, utcOffset: number | string) => {
  const targetTime = dayjs(date).utcOffset(utcOffset)
  const converted = targetTime.utcOffset(dayjs().utcOffset(), true)
  return new Date(converted.format())
}

/**
 * Hook for timezone-aware TimeRangePicker
 *
 * @example
 * ```tsx
 * const Component = () => {
 *   const [value, setValue] = useState<TimeRange>()
 *
 *   // UTC+8 timezone (480 minutes)
 *   const utcOffset = 480
 *
 *   // Use hook to convert timezone
 *   const timeRangePickerProps = useTimeRangePicker({
 *     value,
 *     onChange: setValue,
 *     minDateTime: () => dayjs().subtract(1, 'day').toDate(),
 *     maxDateTime: () => dayjs().add(1, 'day').toDate(),
 *     utcOffset
 *   })
 *
 *   // Use spread operator to pass converted props
 *   return <TimeRangePicker {...timeRangePickerProps} />
 * }
 * ```
 */
export const useTimeRangePicker = ({
  value,
  onChange,
  minDateTime,
  maxDateTime,
  maxDuration,
  relativeFormatter,
  absoluteFormatter,
  dateInputFormat,
  utcOffset = dayjs().utcOffset()
}: UseTimeRangePickerProps) => {
  // Convert local timezone time to specified utcOffset time
  const convertFromLocal = useMemoizedFn((date: Date) => {
    // User selected time, first utcOffset(target, true) then set to target timezone
    const targetTime = dayjs(date).utcOffset(utcOffset, true)
    return new Date(targetTime.format())
  })

  // Convert absolute time range from specified timezone to local timezone for display
  const convertAbsoluteTimeRangeToLocal = useMemoizedFn((timeRange: AbsoluteTimeRange): AbsoluteTimeRange => {
    const [from, to] = timeRange.value
    const fromDate = new Date(from * 1000)
    const toDate = new Date(to * 1000)

    const localFromDate = convertToLocal(fromDate, utcOffset)
    const localToDate = convertToLocal(toDate, utcOffset)

    return {
      type: 'absolute',
      value: [Math.floor(localFromDate.getTime() / 1000), Math.floor(localToDate.getTime() / 1000)]
    }
  })

  // Convert absolute time range from local timezone to specified timezone
  const convertAbsoluteTimeRangeFromLocal = useMemoizedFn((timeRange: AbsoluteTimeRange): AbsoluteTimeRange => {
    const [from, to] = timeRange.value
    const fromDate = new Date(from * 1000)
    const toDate = new Date(to * 1000)

    const targetFromDate = convertFromLocal(fromDate)
    const targetToDate = convertFromLocal(toDate)

    return {
      type: 'absolute',
      value: [Math.floor(targetFromDate.getTime() / 1000), Math.floor(targetToDate.getTime() / 1000)]
    }
  })

  // Convert controlled value from specified timezone to local timezone
  const displayValue = useMemo(() => {
    if (value.type === 'relative') {
      const _v = { ...value }
      _v.utcOffset = utcOffset
      return _v // Relative time ranges don't need timezone conversion
    }
    return convertAbsoluteTimeRangeToLocal(value)
  }, [value, convertAbsoluteTimeRangeToLocal])

  // Convert min/max time from specified timezone to local timezone
  const displayMinDateTime = useMemo(() => {
    if (!minDateTime) return undefined
    return () => convertToLocal(minDateTime(), utcOffset)
  }, [minDateTime])

  const displayMaxDateTime = useMemo(() => {
    if (!maxDateTime) return undefined
    return () => convertToLocal(maxDateTime(), utcOffset)
  }, [maxDateTime])

  // Handle onChange callback, convert local timezone time to specified timezone
  const handleChange = useMemoizedFn((localTimeRange?: TimeRange) => {
    if (!localTimeRange) {
      onChange?.(undefined)
      return
    }

    if (localTimeRange.type === 'relative') {
      onChange?.(localTimeRange) // Relative time ranges don't need timezone conversion
      return
    }

    const targetTimeRange = convertAbsoluteTimeRangeFromLocal(localTimeRange)
    onChange?.(targetTimeRange)
  })

  // Convert formatters to handle timezone conversion
  const displayRelativeFormatter = useMemo(() => {
    if (!relativeFormatter) return undefined
    return (relativeRange: RelativeTimeRange) => relativeFormatter(relativeRange)
  }, [relativeFormatter])

  const displayAbsoluteFormatter = useMemo(() => {
    if (!absoluteFormatter) return undefined
    return (absoluteRange: AbsoluteTimeRange) => {
      // Convert the absolute range to the target timezone for formatting
      const targetRange = convertAbsoluteTimeRangeFromLocal(absoluteRange)
      return absoluteFormatter(targetRange)
    }
  }, [absoluteFormatter, convertAbsoluteTimeRangeFromLocal])

  const displayDateInputFormat = useMemo(() => {
    if (!dateInputFormat) return undefined
    return (date: Date) => {
      // Convert the date to the target timezone for formatting
      const targetDate = convertFromLocal(date)
      return dateInputFormat(targetDate)
    }
  }, [dateInputFormat, convertFromLocal])

  return {
    value: displayValue,
    onChange: handleChange,
    minDateTime: displayMinDateTime,
    maxDateTime: displayMaxDateTime,
    maxDuration,
    relativeFormatter: displayRelativeFormatter,
    absoluteFormatter: displayAbsoluteFormatter,
    dateInputFormat: displayDateInputFormat,
    timezone: typeof utcOffset === 'number' ? utcOffset : undefined
  }
}
