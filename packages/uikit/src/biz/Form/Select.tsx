import { get } from 'lodash-es'
import { RegisterOptions, useFormContext, Controller } from 'react-hook-form'

import { Select, SelectProps } from '../../primitive/index.js'

export interface FormSelectProps extends SelectProps {
  name: string
  rules?: RegisterOptions
}

export const FormSelect: React.FC<FormSelectProps> = ({ name, rules, onChange: onSelect, data, ...restProps }) => {
  const { control, errors } = useFormContext()
  // use lodash get method to query a chained path of the property
  const error = get(errors, name)

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ onChange, value }) => {
        return (
          <Select
            value={value}
            data={data}
            onChange={(val) => {
              onChange(val)
              onSelect?.(val)
            }}
            error={error?.message}
            {...restProps}
          />
        )
      }}
    />
  )
}
