import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { NumberInput, NumberInputProps } from '../../primitive/index.js'

export interface FormNumberInputProps extends NumberInputProps {
  name: string
  rules?: RegisterOptions
}

export const FormNumberInput: React.FC<FormNumberInputProps> = ({ name, rules, onChange, ...rest }) => {
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
          <NumberInput
            {...rest}
            onChange={(value) => {
              handleChange(value)
              onChange?.(value)
            }}
            {...restField}
            error={error ? <ErrorMessage errors={formState.errors} name={name} /> : undefined}
          />
        )
      }}
    />
  )
}
