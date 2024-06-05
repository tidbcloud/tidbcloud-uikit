import { ErrorMessage } from '@hookform/error-message'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { Textarea, TextareaProps } from '../../primitive/index.js'

export interface FormTextareaInputProps extends TextareaProps {
  name: string
  rules?: RegisterOptions
}

export const FormTextareaInput: React.FC<FormTextareaInputProps> = ({ name, rules, onChange, ...rest }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        const { onChange: handleChange, ...restField } = field
        return (
          <Textarea
            onChange={(e) => {
              handleChange(e)
              onChange?.(e)
            }}
            error={<ErrorMessage errors={errors} name={name} />}
            {...restField}
            {...rest}
          />
        )
      }}
    />
  )
}
