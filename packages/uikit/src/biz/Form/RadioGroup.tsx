import { get, omit } from 'lodash-es'
import React, { Fragment } from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

import { Radio, RadioGroupProps, RadioProps, Box, HoverCard, HoverCardProps, Tooltip } from '../../primitive/index.js'

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
              return (
                <Fragment key={i.value as any}>
                  {i.tooltip ? (
                    i.tooltipProps?.useTooltip ? (
                      <Tooltip label={i.tooltip} withArrow>
                        <Box>
                          <Radio {...radioProps} />
                        </Box>
                      </Tooltip>
                    ) : (
                      <HoverCard withArrow shadow="md" withinPortal {...i.tooltipProps}>
                        <HoverCard.Target>
                          <Box>
                            <Radio {...radioProps} />
                          </Box>
                        </HoverCard.Target>

                        <HoverCard.Dropdown>{i.tooltip}</HoverCard.Dropdown>
                      </HoverCard>
                    )
                  ) : (
                    <Radio {...radioProps} />
                  )}
                </Fragment>
              )
            })}
          </Radio.Group>
        )
      }}
    />
  )
}
