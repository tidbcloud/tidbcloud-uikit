import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { TimeRangePicker, TimeRangePickerProps } from '../TimeRangePicker/index.js'

export type FormTimeRangePickerProps = TimeRangePickerProps & {
  name: string
  rules?: RegisterOptions
}

export const FormTimeRangePicker = ({ name, rules, onChange, ...rest }: FormTimeRangePickerProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        const { onChange: handleChange, ...restField } = field
        return (
          <TimeRangePicker
            onChange={(e) => {
              handleChange(e)
              onChange?.(e)
            }}
            {...restField}
            {...rest}
          />
        )
      }}
    />
  )
}
