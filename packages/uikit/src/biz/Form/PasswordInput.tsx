import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { PasswordInput, PasswordInputProps } from '../../primitive/index.js'

export interface FormPasswordInputProps extends PasswordInputProps {
  name: string
  rules?: RegisterOptions
}

export const FormPasswordInput: React.FC<FormPasswordInputProps> = ({ name, rules, onChange, ...rest }) => {
  const { control, formState, getFieldState } = useFormContext()
  const { error } = getFieldState(name, formState)

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
            error={error ? <ErrorMessage errors={formState.errors} name={name} /> : undefined}
          />
        )
      }}
    />
  )
}
