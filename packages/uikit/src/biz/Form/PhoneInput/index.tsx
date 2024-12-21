import { ErrorMessage } from '@hookform/error-message'
import { createStyles } from '@mantine/emotion'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'
import { CountryData } from 'react-phone-input-2'

import { SelectProps, Box, BoxProps } from '../../../primitive/index.js'
import { mergeStylesList, getThemeColor } from '../../../utils/index.js'
import { PhoneInput, PhoneInputProps } from '../../PhoneInput/index.js'
import { FormSelect } from '../Select.js'

import rawCountries from './rawCountries.js'

export interface FormPhoneInputProps extends Omit<PhoneInputProps, 'onSelect'> {
  name: string
  defaultCountry?: string
  rules?: RegisterOptions
  onSelect?: (value: string, country: CountryData | {}) => void
}

export const FormPhoneInput: React.FC<FormPhoneInputProps> = ({
  name,
  rules,
  onChange: onInputChange,
  onSelect,
  label,
  rootProps,
  ...rest
}) => {
  const { control, formState, getFieldState } = useFormContext()
  const { error } = getFieldState(name, formState)

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange } }) => {
        const handleChange: PhoneInputProps['onChange'] = (value, data, event, formattedValue: string) => {
          onChange(formattedValue)
          onSelect?.(formattedValue, data)
          onInputChange?.(formattedValue, data, event, formattedValue)
        }
        return (
          <PhoneInput
            error={error ? <ErrorMessage errors={formState.errors} name={name} /> : undefined}
            value={value}
            label={label}
            onChange={handleChange}
            rootProps={rootProps}
            {...rest}
          />
        )
      }}
    ></Controller>
  )
}

export interface FormPhoneInputV2Props extends Omit<PhoneInputProps, 'onSelect'> {
  countryKey: string
  phoneKey: string
  defaultCountry?: string
  rules?: RegisterOptions
  countryRules?: RegisterOptions
  onSelect?: (value: string, country: CountryData | {}) => void
  selectProps: Omit<SelectProps, 'data'> & {
    filterData?: (
      data: { value: string; label: string },
      index: number,
      array: { value: string; label: string }[]
    ) => boolean
  }
  rootProps?: BoxProps
}

const countryOptions = rawCountries.map((raw) => {
  return {
    // country code
    value: raw[2] as string,
    // country name
    label: `${raw[0]}`
  }
})

const useStyles = createStyles((theme) => {
  const errorColor = getThemeColor('red', theme)
  return {
    phoneInputContainer: {
      borderTopLeftRadius: '0 !important',
      borderBottomLeftRadius: '0 !important',
      transform: 'translateX(-1px)'
    },
    error: {
      color: errorColor,
      lineHeight: 1.2,
      fontSize: 12
    }
  }
})

export const FormPhoneInputV2: React.FC<FormPhoneInputV2Props> = ({
  countryKey,
  phoneKey,
  selectProps = {},
  countryRules,
  rules,
  rootProps,
  ...rest
}) => {
  const { watch, formState, getFieldState } = useFormContext()
  const { filterData: onFilter, ...restProps } = selectProps
  const { error: countryError } = getFieldState(countryKey, formState)
  const { error: phoneError } = getFieldState(phoneKey, formState)
  const country = watch(countryKey, '')
  const { classes } = useStyles()

  return (
    <Box {...rootProps}>
      <Box display="flex">
        <FormSelect
          data={onFilter ? countryOptions.filter(onFilter) : countryOptions}
          {...restProps}
          name={countryKey}
          rules={countryRules}
          styles={mergeStylesList([
            () => {
              return {
                wrapper: {
                  ':hover': {
                    zIndex: 1
                  },
                  ':focus-within': {
                    zIndex: 1
                  },
                  zIndex: countryError ? 1 : undefined
                },
                error: {
                  display: 'none'
                },
                input: {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                }
              }
            },
            restProps.styles
          ])}
        ></FormSelect>
        <FormPhoneInput
          country={country}
          rootProps={{ w: '100%', mb: 0 }}
          rules={rules}
          inputClass={classes.phoneInputContainer}
          styles={{
            error: {
              display: 'none'
            }
          }}
          showContryCodeAfterFocus={false}
          name={phoneKey}
          {...rest}
        />
      </Box>
      {(countryError || phoneError) && (
        <div className={classes.error}>
          <ErrorMessage errors={formState.errors} name={countryKey} />
          <ErrorMessage errors={formState.errors} name={phoneKey} />
        </div>
      )}
    </Box>
  )
}
