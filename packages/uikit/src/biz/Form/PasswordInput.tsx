import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { PasswordInput, PasswordInputProps } from '../../primitive/index.js'

export interface FormPasswordInputProps extends PasswordInputProps {
  name: string
  rules?: RegisterOptions
}

export const FormPasswordInput: React.FC<FormPasswordInputProps> = ({ name, rules, onChange, ...rest }) => {
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
          <PasswordInput
            {...rest}
            onChange={(e) => {
              handleChange(e)
              onChange?.(e)
            }}
            {...restField}
            error={<ErrorMessage errors={errors} name={name} />}
          />
        )
      }}
    />
  )
}
