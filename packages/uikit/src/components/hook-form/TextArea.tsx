import { Textarea, TextareaProps } from '@tidb-cloud-uikit/components'
import { get } from 'lodash-es'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

export interface FormTextareaInputProps extends TextareaProps {
  name: string
  rules?: RegisterOptions
}

export const FormTextareaInput: React.FC<FormTextareaInputProps> = ({ name, rules, onChange, ...rest }) => {
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
          <Textarea
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
