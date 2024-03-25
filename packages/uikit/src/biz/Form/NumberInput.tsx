import { get } from 'lodash-es'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { NumberInput, NumberInputProps } from '../../primitive/index.js'

export interface FormNumberInputProps extends NumberInputProps {
  name: string
  rules?: RegisterOptions
}

export const FormNumberInput: React.FC<FormNumberInputProps> = ({ name, rules, onChange, ...rest }) => {
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
          <NumberInput
            {...rest}
            onChange={(value) => {
              handleChange(value)
              onChange?.(value)
            }}
            {...restField}
            error={error?.message}
          />
        )
      }}
    />
  )
}
