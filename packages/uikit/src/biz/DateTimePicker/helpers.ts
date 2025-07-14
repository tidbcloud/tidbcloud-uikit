import { useMemoizedFn } from 'ahooks'
import { useMemo } from 'react'

import { dayjs, Dayjs } from '../../utils/dayjs.js'

import { DateTimePickerProps } from './types.js'

export interface UseDateTimePickerProps
  extends Pick<DateTimePickerProps, 'value' | 'onChange' | 'startDate' | 'endDate' | 'format' | 'formatter'> {
  /**
   * the UTC offset in minutes.
   * User selected time will be treated as time in that timezone
   * If the input is less than 16 and greater than -16, it will interpret your input as hours instead.
   * It also can be a string like '+09:00' or '-01:00'
   * @see https://day.js.org/docs/en/manipulate/utc-offset
   */
  utcOffset?: number | string
}

/**
 * Hook for timezone-aware DateTimePicker
 *
 * @example
 * ```tsx
 * const Component = () => {
 *   const [value, setValue] = useState<Date>()
 *
 *   // UTC+8 timezone (480 minutes)
 *   const utcOffset = 480
 *
 *   // Use hook to convert timezone
 *   const dateTimePickerProps = useDateTimePicker({
 *     value,
 *     onChange: setValue,
 *     startDate: dayjs().subtract(1, 'day').toDate(),
 *     endDate: dayjs().add(1, 'day').toDate(),
 *     utcOffset
 *   })
 *
 *   // Use spread operator to pass converted props
 *   return <DateTimePicker {...dateTimePickerProps} />
 * }
 * ```
 */
export const useDateTimePicker = ({
  value,
  onChange,
  startDate = dayjs().subtract(10, 'year').toDate(),
  endDate = dayjs().add(10, 'year').toDate(),
  utcOffset = dayjs().utcOffset(),
  format,
  formatter
}: UseDateTimePickerProps): Pick<DateTimePickerProps, 'value' | 'onChange' | 'startDate' | 'endDate' | 'formatter'> => {
  // Convert time with specified utcOffset to local timezone for display
  const convertToLocal = useMemoizedFn((date: Date): Date => {
    // Treat time as specified utcOffset time, then shift to local timezone
    const targetTime = dayjs(date).utcOffset(utcOffset)
    const converted = targetTime.utcOffset(dayjs().utcOffset(), true)
    // Don't just call `toDate()`, it will not work due to https://github.com/iamkun/dayjs/issues/1803
    // Convert to string first to avoid corrupted internal state
    return new Date(converted.format())
  })

  // Convert local timezone time to specified utcOffset time
  const convertFromLocal = useMemoizedFn((date: Date) => {
    // User selected time, first utcOffset(target, true) then set to target timezone
    const targetTime = dayjs(date).utcOffset(utcOffset, true)
    return new Date(targetTime.format())
  })

  // Convert controlled value from specified timezone to local timezone
  const displayValue = useMemo(() => {
    if (!value) return undefined
    return convertToLocal(value)
  }, [value, convertToLocal])

  // Convert start/end time from specified timezone to local timezone
  const displayStartDate = useMemo(() => {
    return convertToLocal(startDate)
  }, [startDate, convertToLocal])

  const displayEndDate = useMemo(() => {
    return convertToLocal(endDate)
  }, [endDate, convertToLocal])

  // Handle onChange callback, convert local timezone time to specified timezone
  const handleChange = useMemoizedFn((localTime: Date) => {
    const targetTime = convertFromLocal(localTime)
    onChange?.(targetTime)
  })

  return {
    value: displayValue,
    onChange: handleChange,
    startDate: displayStartDate,
    endDate: displayEndDate,
    formatter: (val) => {
      const targetTime = dayjs(val).utcOffset(utcOffset, true)
      return formatter ? formatter(new Date(targetTime.format())) : targetTime.format(format)
    }
  }
}
