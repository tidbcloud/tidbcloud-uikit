import { ErrorMessage } from '@hookform/error-message'
import { RegisterOptions, useFormContext, Controller } from 'react-hook-form'

import { MultiSelect, MultiSelectProps } from '../../primitive/index.js'

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
  const { control, formState, getFieldState } = useFormContext()
  const { error } = getFieldState(name, formState)

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        return (
          <MultiSelect
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
