import { PasswordInput, PasswordInputProps } from '@tidb-cloud-uikit/components'
import { get } from 'lodash-es'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

export interface FormPasswordInputProps extends PasswordInputProps {
  name: string
  rules?: RegisterOptions
}

export const FormPasswordInput: React.FC<FormPasswordInputProps> = ({ name, rules, onChange, ...rest }) => {
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
          <PasswordInput
            {...rest}
            onChange={(e) => {
              handleChange(e)
              onChange?.(e)
            }}
            {...restField}
            error={error?.message}
          />
        )
      }}
    />
  )
}
