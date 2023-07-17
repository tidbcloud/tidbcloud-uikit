import {
  Radio,
  RadioGroupProps,
  RadioProps,
  Box,
  HoverCard,
  HoverCardProps,
  Tooltip
} from '@tidb-cloud-uikit/components'
import { get, omit } from 'lodash-es'
import React from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

export interface FormRadioGroupProps extends Omit<RadioGroupProps, 'children'> {
  name: string
  rules?: RegisterOptions
  data: Array<RadioProps & { tooltip?: React.ReactNode; tooltipProps?: HoverCardProps & { useTooltip?: boolean } }>
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
            {data.map((i) => {
              const radioProps = omit(i, 'tooltipProps', 'tooltip')
              return i.tooltip ? (
                i.tooltipProps?.useTooltip ? (
                  <Tooltip label={i.tooltip} withArrow>
                    <Box>
                      <Radio key={i.value as any} {...radioProps} />
                    </Box>
                  </Tooltip>
                ) : (
                  <HoverCard withArrow shadow="md" withinPortal {...i.tooltipProps}>
                    <HoverCard.Target>
                      <Box>
                        <Radio key={i.value as any} {...radioProps} />
                      </Box>
                    </HoverCard.Target>

                    <HoverCard.Dropdown>{i.tooltip}</HoverCard.Dropdown>
                  </HoverCard>
                )
              ) : (
                <Radio key={i.value as any} {...radioProps} />
              )
            })}
          </Radio.Group>
        )
      }}
    />
  )
}
