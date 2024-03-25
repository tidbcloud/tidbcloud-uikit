import { get } from 'lodash-es'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { DatePicker, DatePickerProps } from '../../primitive/index.js'

export interface FormDatePickerProps extends DatePickerProps {
  name: string
  rules?: RegisterOptions
}

export const FormDatePicker: React.FC<FormDatePickerProps> = ({ name, rules, onChange, ...rest }) => {
  const { control, errors } = useFormContext()
  const error = get(errors, name)

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={(field) => {
        const { onChange: handleChange, ...restField } = field
        return (
          <DatePicker
            onChange={(e) => {
              handleChange(e)
              onChange?.(e)
            }}
            error={error?.message}
            {...restField}
            {...rest}
          />
        )
      }}
    />
  )
}
