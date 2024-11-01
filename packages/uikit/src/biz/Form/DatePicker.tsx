import { ErrorMessage } from '@hookform/error-message'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { DatePickerInputProps, DatePickerInput, DatePickerType } from '../../primitive/index.js'

export interface FormDatePickerProps extends DatePickerInputProps<DatePickerType> {
  name: string
  rules?: RegisterOptions
}

export const FormDatePicker = ({ name, rules, onChange, ...rest }: FormDatePickerProps) => {
  const { control, formState, getFieldState } = useFormContext()
  const { error } = getFieldState(name, formState)

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        const { onChange: handleChange, ...restField } = field
        return (
          <DatePickerInput
            onChange={(e) => {
              handleChange(e)
              onChange?.(e)
            }}
            error={error ? <ErrorMessage errors={formState.errors} name={name} /> : undefined}
            {...restField}
            {...rest}
          />
        )
      }}
    />
  )
}
