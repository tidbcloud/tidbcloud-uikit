import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useState, useMemo, useCallback } from 'react'

// Initialize dayjs plugins
dayjs.extend(utc)

// --- Type Definitions ---

/**
 * Props for the useDateTimePicker hook.
 */
type UseDateTimePickerProps = {
  /** The controlled value. If provided, the hook operates in controlled mode. */
  value?: string | Date | undefined
  /** The initial value for uncontrolled mode. Ignored if `value` is provided. */
  defaultValue?: string | Date | undefined
  /** The minimum selectable date (UTC string or Date object). */
  start?: string | Date | undefined
  /** The maximum selectable date (UTC string or Date object). */
  end?: string | Date | undefined
  /** The target UTC offset the component should operate in, e.g., '+08:00'. */
  utcOffset: string
  /** Callback that returns the correct UTC string when the value changes. */
  onChange?: (date: Dayjs | undefined, utcString: string | undefined) => void
}

/**
 * The return value of the useDateTimePicker hook.
 */
type UseDateTimePickerReturn = {
  value: Date | undefined
  start: Date | undefined
  end: Date | undefined
  setValue: (date: Date | undefined) => void
}

// --- Helper Functions ---

/**
 * Reinterprets a date/time (Date object or string) as a time in a specific UTC offset.
 * This is key for handling user input from the picker, leveraging dayjs's `keepLocalTime` feature.
 */
const reinterpretDateInTargetOffset = (
  dateToReinterpret: Date | string | null | undefined,
  targetOffsetString: string
): Dayjs | undefined => {
  if (!dateToReinterpret) return undefined
  return dayjs(dateToReinterpret).utcOffset(targetOffsetString, true)
}

/**
 * Converts a UTC time value (string or Date) into a 'visual' Date object
 * that displays correctly on a calendar operating in a specific target offset.
 */
const createVisualDateForPicker = (
  utcValue: string | Date | null | undefined,
  offsetString: string
): Date | undefined => {
  if (!utcValue) return undefined

  const sign = offsetString[0] === '-' ? -1 : 1
  const parts = offsetString.substring(1).split(':')
  const hours = parseInt(parts[0], 10)
  const minutes = parseInt(parts[1] || '0', 10)
  const totalOffsetMinutes = sign * (hours * 60 + minutes)

  const dateInTargetOffset = dayjs.utc(utcValue).utcOffset(totalOffsetMinutes)

  return new Date(
    dateInTargetOffset.year(),
    dateInTargetOffset.month(),
    dateInTargetOffset.date(),
    dateInTargetOffset.hour(),
    dateInTargetOffset.minute(),
    dateInTargetOffset.second()
  )
}

// --- Core Hook ---

/**
 * A React Hook to handle timezone issues for date/time pickers.
 * It acts as an adapter between the server (UTC time) and the UI component (visual/local time).
 * Supports both controlled (via `value`) and uncontrolled (via `defaultValue`) modes.
 */
export const useDateTimePicker = ({
  value,
  defaultValue,
  start: serverStart,
  end: serverEnd,
  utcOffset,
  onChange
}: UseDateTimePickerProps): UseDateTimePickerReturn => {
  // Determine if the component is controlled.
  const isControlled = value !== undefined

  // Internal state for uncontrolled mode. Initialized only once from defaultValue.
  const [internalValue, setInternalValue] = useState<Date | undefined>(() =>
    createVisualDateForPicker(defaultValue, utcOffset)
  )

  // Forward conversion for start/end boundaries.
  const displayStart = useMemo(() => createVisualDateForPicker(serverStart, utcOffset), [serverStart, utcOffset])

  const displayEnd = useMemo(() => createVisualDateForPicker(serverEnd, utcOffset), [serverEnd, utcOffset])

  // Determine the value to display in the picker.
  // If controlled, derive from the `value` prop. If uncontrolled, use internal state.
  const displayValue = isControlled
    ? useMemo(() => createVisualDateForPicker(value, utcOffset), [value, utcOffset])
    : internalValue

  // Reverse conversion: Process the local Date object from the picker.
  const handleValueChange = useCallback(
    (dateFromPicker: Date | undefined) => {
      // This is the core reverse logic.
      const correctDayjsObject = reinterpretDateInTargetOffset(dateFromPicker, utcOffset)
      const finalUtcString = correctDayjsObject ? correctDayjsObject.toISOString() : undefined

      // If in uncontrolled mode, update the internal state.
      if (!isControlled) {
        setInternalValue(dateFromPicker)
      }

      // Always call the provided callback with the correctly processed UTC string.
      onChange?.(correctDayjsObject, finalUtcString)
    },
    [utcOffset, onChange, isControlled]
  )

  return {
    value: displayValue,
    start: displayStart,
    end: displayEnd,
    setValue: handleValueChange
  }
}
