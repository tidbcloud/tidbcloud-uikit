import { Checkbox, CheckboxProps, CheckboxGroupProps } from '@tidb-cloud-uikit/components'
import { get } from 'lodash-es'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

export interface FormCheckboxProps extends CheckboxProps {
  name: string
  rules?: RegisterOptions
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({ name, rules, onChange, ...rest }) => {
  const { control, errors } = useFormContext()
  const error = get(errors, name)

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={(field) => {
        const { onChange: handleChange, value, ...restField } = field
        return (
          <Checkbox
            checked={value}
            {...rest}
            onChange={(e) => {
              handleChange(e.currentTarget.checked)
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

export interface FormCheckboxGroupProps extends Omit<CheckboxGroupProps, 'children'> {
  name: string
  rules?: RegisterOptions
  data: CheckboxProps[]
}

export const FormCheckboxGroup = ({ name, rules, data, onChange, ...rest }: FormCheckboxGroupProps) => {
  const { control, errors } = useFormContext()
  const error = get(errors, name)

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={(field) => {
        const { onChange: handleChange, value, ...restField } = field
        return (
          <Checkbox.Group
            {...rest}
            value={value}
            onChange={(val) => {
              handleChange(val)
              onChange?.(val)
            }}
            {...restField}
            error={error?.message}
          >
            {data.map((i) => (
              <Checkbox {...i} key={i.value as string} />
            ))}
          </Checkbox.Group>
        )
      }}
    />
  )
}
