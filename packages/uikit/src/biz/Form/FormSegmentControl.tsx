import { RegisterOptions, useFormContext, Controller } from 'react-hook-form'

import { SegmentedControlProps, SegmentedControl } from '../../primitive/index.js'

export interface FormSegmentedControlProps extends SegmentedControlProps {
  name: string
  rules?: RegisterOptions
}

export const FormSegmentedControl = ({ name, rules, ...restProps }: FormSegmentedControlProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        return <SegmentedControl value={value} onChange={onChange} {...restProps} />
      }}
    ></Controller>
  )
}
