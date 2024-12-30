import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { Checkbox, CheckboxProps, CheckboxGroupProps, Flex, FlexProps } from '../../primitive/index.js'

export interface FormCheckboxProps extends CheckboxProps {
  name: string
  rules?: RegisterOptions
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({ name, rules, onChange, ...rest }) => {
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
          <Checkbox
            checked={value}
            {...rest}
            onChange={(e) => {
              handleChange(e.currentTarget.checked)
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

export interface FormCheckboxGroupProps extends Omit<CheckboxGroupProps, 'children'> {
  name: string
  rules?: RegisterOptions
  data: CheckboxProps[]
  direction?: FlexProps['direction']
  gap?: FlexProps['gap']
}

export const FormCheckboxGroup = ({
  name,
  rules,
  data,
  onChange,
  direction,
  gap = 'sm',
  label,
  ...rest
}: FormCheckboxGroupProps) => {
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
          <Checkbox.Group
            {...rest}
            label={label}
            value={value}
            onChange={(val) => {
              handleChange(val)
              onChange?.(val)
            }}
            {...restField}
            error={error ? <ErrorMessage errors={formState.errors} name={name} /> : undefined}
          >
            <Flex direction={direction} gap={gap} mt={label ? 'xs' : undefined}>
              {data.map((i) => (
                <Checkbox {...i} key={i.value as string} />
              ))}
            </Flex>
          </Checkbox.Group>
        )
      }}
    />
  )
}
