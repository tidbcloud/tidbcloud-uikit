import { get } from 'lodash-es'
import { RegisterOptions, useFormContext, Controller } from 'react-hook-form'

import { MultiSelect, MultiSelectProps } from '../../primitive'

export interface FormMultiSelectProps extends MultiSelectProps {
  name: string
  rules?: RegisterOptions
}

export const FormMultiSelect: React.FC<FormMultiSelectProps> = ({
  name,
  rules,
  onChange: onSelect,
  data,
  ...restProps
}) => {
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
          <MultiSelect
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
