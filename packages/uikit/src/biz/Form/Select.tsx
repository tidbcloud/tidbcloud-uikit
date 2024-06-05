import { ErrorMessage } from '@hookform/error-message'
import { RegisterOptions, useFormContext, Controller } from 'react-hook-form'

import { Select, SelectProps } from '../../primitive/index.js'

export interface FormSelectProps extends SelectProps {
  name: string
  rules?: RegisterOptions
}

export const FormSelect: React.FC<FormSelectProps> = ({ name, rules, onChange: onSelect, data, ...restProps }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

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
            error={<ErrorMessage errors={errors} name={name} />}
            {...restProps}
          />
        )
      }}
    />
  )
}
