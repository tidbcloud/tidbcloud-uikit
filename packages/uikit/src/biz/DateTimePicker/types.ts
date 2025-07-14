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
  startDate?: Date
  endDate?: Date
  onChange?: (val: Date) => void

  disable?: boolean
  withinPortal?: boolean
  loading?: boolean
  size?: MantineSize
  footer?: React.ReactNode
}
