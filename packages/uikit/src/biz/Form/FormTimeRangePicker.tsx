import { ErrorMessage } from '@hookform/error-message'
import { Sx } from '@mantine/styles'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { TimeRangePicker, TimeRangePickerProps } from '../TimeRangePicker/index.js'

export interface FormTimeRangePickerProps extends TimeRangePickerProps {
  name: string
  rules?: RegisterOptions
  sx?: Sx
}

export const FormTimeRangePicker: React.FC<FormTimeRangePickerProps> = ({ name, rules, onChange, ...rest }) => {
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
