import { ErrorMessage } from '@hookform/error-message'
import { RegisterOptions, useFormContext, Controller } from 'react-hook-form'

import { Select, SelectProps } from '../../primitive/index.js'

export interface FormSelectProps extends SelectProps {
  name: string
  rules?: RegisterOptions
}

export const FormSelect: React.FC<FormSelectProps> = ({ name, rules, onChange: onSelect, data, ...restProps }) => {
  const { control, formState, getFieldState } = useFormContext()
  const { error } = getFieldState(name, formState)

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        return (
          <Select
            value={value}
            data={data}
            onChange={(val) => {
              onChange(val)
              onSelect?.(val)
            }}
            error={error ? <ErrorMessage errors={formState.errors} name={name} /> : undefined}
            {...restProps}
          />
        )
      }}
    />
  )
}
