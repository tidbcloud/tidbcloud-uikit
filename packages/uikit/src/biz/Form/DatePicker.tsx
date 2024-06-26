import { ErrorMessage } from '@hookform/error-message'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { DatePicker, DatePickerProps } from '../../primitive/index.js'

export interface FormDatePickerProps extends DatePickerProps {
  name: string
  rules?: RegisterOptions
}

export const FormDatePicker: React.FC<FormDatePickerProps> = ({ name, rules, onChange, ...rest }) => {
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
          <DatePicker
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
