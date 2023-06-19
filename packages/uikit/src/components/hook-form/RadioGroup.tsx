import { Radio, RadioGroupProps, RadioProps } from '@mantine/core'
import { get } from 'lodash-es'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

export interface FormRadioGroupProps extends Omit<RadioGroupProps, 'children'> {
  name: string
  rules?: RegisterOptions
  data: RadioProps[]
}

export const FormRadioGroup: React.FC<FormRadioGroupProps> = ({ name, rules, onChange, data, ...rest }) => {
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
          <Radio.Group
            {...rest}
            onChange={(value) => {
              handleChange(value)
              onChange?.(value)
            }}
            {...restField}
            error={error?.message}
          >
            {data.map((i) => (
              <Radio key={i.value as any} {...i} />
            ))}
          </Radio.Group>
        )
      }}
    />
  )
}
