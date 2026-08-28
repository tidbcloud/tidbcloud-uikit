import { MantineSize, TextInputProps } from '../../primitive/index.js'

export interface DateTimePickerProps extends Omit<TextInputProps, 'value' | 'onChange' | 'defaultValue'> {
  /**
   * The placeholder of the input.
   * @default 'Select time'
   */
  placeholder?: string
  /**
   * The format of the date string.
   * @default 'YYYY-MM-DD HH:mm:ss'
   */
  format?: string
  /**
   * A function to format the date in the input
   * If provided, `format` prop will be ignored.
   */
  formatter?: (val: Date) => string

  /**
   * This props is deprecated, use `formatter` instead to display the time in any timezone.
   * @deprecated
   */
  utcOffset?: number
  defaultValue?: Date
  value?: Date
  /**
   * The reference date used to highlight "today" in the calendar.
   * It only drives the current-day highlight; it does NOT change the selectable range.
   * When using `useDateTimePicker`, leave this undefined to default to "today" in the
   * organization timezone (derived from `utcOffset`). Pass a value only to override
   * the reference day (e.g. tests or a custom anchor date).
   * @default organization timezone's today (or `new Date()` when used without the hook)
   */
  today?: Date
  /**
   * When true, "today" is highlighted with a dark border in the calendar (unless it is
   * the currently selected date). Off by default so existing usages are unaffected.
   * @default false
   */
  highlightToday?: boolean
  startDate?: Date
  endDate?: Date
  onChange?: (val: Date) => void

  disable?: boolean
  withinPortal?: boolean
  loading?: boolean
  size?: MantineSize
  footer?: React.ReactNode
}
