import { ErrorMessage } from '@hookform/error-message'
import { Controller, useFormContext, RegisterOptions } from 'react-hook-form'

import { Input, InputWrapperProps, Rating, RatingProps } from '../../primitive/index.js'
import { mergeStylesList } from '../../utils/index.js'

export interface FormRatingInputProps extends RatingProps {
  label?: InputWrapperProps['label']
  withAsterisk?: InputWrapperProps['withAsterisk']
  wrapperProps?: Omit<InputWrapperProps, 'children'>
  name: string
  rules?: RegisterOptions
}

export const FormRatingInput: React.FC<FormRatingInputProps> = ({
  name,
  label,
  withAsterisk,
  rules,
  wrapperProps,
  ...rest
}) => {
  const { control, formState, getFieldState } = useFormContext()
  const { error } = getFieldState(name, formState)

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        return (
          <Input.Wrapper
            error={error ? <ErrorMessage errors={formState.errors} name={name} /> : undefined}
            label={label}
            withAsterisk={withAsterisk}
            {...wrapperProps}
            styles={mergeStylesList([
              () => ({
                label: {
                  marginBottom: 10
                },
                error: {
                  marginTop: 8
                }
              }),
              wrapperProps?.styles || {}
            ])}
          >
            <Rating onChange={onChange} value={value} {...rest} />
          </Input.Wrapper>
        )
      }}
    ></Controller>
  )
}
