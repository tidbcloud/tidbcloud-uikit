import { get } from 'lodash-es'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { TextInput, TextInputProps, Typography } from '../../primitive'
import { mergeStylesList } from '../../utils'

export interface FormTextInputProps extends TextInputProps {
  name: string
  rules?: RegisterOptions
  leftLabel?: string
}

export const FormTextInput: React.FC<FormTextInputProps> = ({ name, rules, onChange, leftLabel, ...rest }) => {
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
          <TextInput
            onChange={(e) => {
              handleChange(e)
              onChange?.(e)
            }}
            error={error?.message}
            styles={mergeStylesList([
              (theme) => {
                if (!leftLabel) {
                  return {}
                }
                return {
                  wrapper: {
                    display: 'flex'
                  },
                  icon: {
                    position: 'relative',
                    width: 'fit-content',
                    border: `1px solid ${theme.colors.gray[4]}`,
                    borderRightWidth: 0,
                    paddingLeft: 12,
                    paddingRight: 12,
                    borderTopLeftRadius: theme.defaultRadius,
                    borderBottomLeftRadius: theme.defaultRadius,
                    backgroundColor: theme.colors.gray[1]
                  },
                  input: {
                    flex: 1,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                  },
                  withIcon: {
                    paddingLeft: 12
                  },
                  invalid: {
                    paddingLeft: 12
                  }
                }
              },
              rest.styles
            ])}
            icon={
              !!leftLabel ? (
                <Typography variant="label-lg" c="gray.6">
                  {leftLabel}
                </Typography>
              ) : undefined
            }
            {...restField}
            {...rest}
          />
        )
      }}
    />
  )
}
