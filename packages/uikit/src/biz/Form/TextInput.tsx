import { get } from 'lodash-es'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { TextInput, TextInputProps } from '../../primitive/index.js'

export interface FormTextInputProps extends TextInputProps {
  name: string
  rules?: RegisterOptions
}

export const FormTextInput: React.FC<FormTextInputProps> = ({ name, rules, onChange, ...rest }) => {
  const {
    control,

    formState: { errors }
  } = useFormContext()
  const error = get(errors, name)

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={(field) => {
        const { onChange: handleChange, ...restField } = field
        return (
          <TextInput
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
