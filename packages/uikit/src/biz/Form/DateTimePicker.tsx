import { useController, RegisterOptions, useFormContext } from 'react-hook-form'

import { UseDateTimePickerProps } from '../DateTimePicker/helpers.js'
import { DateTimePicker, DateTimePickerProps, useDateTimePicker } from '../DateTimePicker/index.js'
import { DEFAULT_TIME_FORMAT } from '../TimeRangePicker/helpers.js'

export interface FormDateTimePickerProps
  extends Omit<DateTimePickerProps, 'value' | 'defaultValue' | 'utcOffset'>,
    Pick<UseDateTimePickerProps, 'utcOffset'> {
  name: string
  rules?: RegisterOptions
}

export const FormDateTimePicker = ({
  name,
  rules,
  utcOffset,
  startDate,
  endDate,
  today,
  highlightToday,
  format = DEFAULT_TIME_FORMAT,
  formatter,
  onChange,
  onBlur,
  error,
  disabled,
  ...rest
}: FormDateTimePickerProps) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({ name, rules, control })
  const pickerProps = useDateTimePicker({
    value: field.value ? new Date(field.value) : undefined,
    utcOffset,
    startDate,
    endDate,
    today,
    highlightToday,
    format,
    formatter,
    onChange: (value) => {
      field.onChange(value.toISOString())
      onChange?.(value)
    }
  })

  return (
    <DateTimePicker
      {...rest}
      {...pickerProps}
      name={field.name}
      ref={field.ref}
      disabled={field.disabled || disabled}
      onBlur={(event) => {
        field.onBlur()
        onBlur?.(event)
      }}
      error={error ?? (fieldState.invalid ? fieldState.error?.message || true : undefined)}
    />
  )
}
