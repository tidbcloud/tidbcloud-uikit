import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { ProMultiSelect, ProMultiSelectProps } from '../ProMultiSelect/index.js'

export interface FormProMultiSelectProps extends ProMultiSelectProps {
  name: string
  rules?: RegisterOptions
}

export const FormProMultiSelect: React.FC<FormProMultiSelectProps> = ({ name, rules, onChange, ...rest }) => {
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
          <ProMultiSelect
            {...rest}
            {...restField}
            onChange={(e) => {
              handleChange(e)
              onChange?.(e)
            }}
            error={error ? <ErrorMessage errors={formState.errors} name={name} /> : undefined}
          />
        )
      }}
    />
  )
}
