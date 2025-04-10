import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { Switch, SwitchProps } from '../../primitive/index.js'

export interface FormSwitchProps extends SwitchProps {
  name: string
  rules?: RegisterOptions
}

export const FormSwitch: React.FC<FormSwitchProps> = ({ name, rules, onChange, label, ...rest }) => {
  const { control, formState, getFieldState } = useFormContext()
  const { error } = getFieldState(name, formState)

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        const { onChange: handleChange, value, ...restField } = field
        return (
          <Switch
            label={label}
            checked={value}
            {...rest}
            onChange={(e) => {
              handleChange(e.currentTarget.checked)
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
