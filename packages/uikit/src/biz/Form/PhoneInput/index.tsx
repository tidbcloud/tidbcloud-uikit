import { get } from 'lodash-es'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'
import { CountryData } from 'react-phone-input-2'

import { SelectProps, Box, BoxProps, createStyles } from '../../../primitive/index.js'
import { PhoneInput, PhoneInputProps } from '../../PhoneInput/index.js'
import { FormSelect } from '../Select.js'

import rawCountries from './rawCountries.js'

export interface FormPhoneInputProps extends PhoneInputProps {
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
  const { control, errors } = useFormContext()
  const error = get(errors, name)
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ value, onChange }) => {
        const handleChange: PhoneInputProps['onChange'] = (value, data, event, formattedValue: string) => {
          onChange(formattedValue)
          onSelect?.(formattedValue, data)
          onInputChange?.(formattedValue, data, event, formattedValue)
        }
        return (
          <PhoneInput
            error={error?.message}
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

export interface FormPhoneInputV2Props extends PhoneInputProps {
  countryKey: string
  phoneKey: string
  defaultCountry?: string
  rules?: RegisterOptions
  countryRules?: RegisterOptions
  onSelect?: (value: string, country: CountryData | {}) => void
  selectProps: Omit<SelectProps, 'data'> & {
    onFilter?: (
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
  const primaryShader = theme.fn.primaryShade()
  const errorColor = theme.colors.red[primaryShader]
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
  selectProps,
  countryRules,
  rules,
  rootProps,
  ...rest
}) => {
  const { errors, watch } = useFormContext()
  const { ...restProps } = selectProps
  const countryError = get(errors, countryKey)
  const phoneError = get(errors, phoneKey)
  const country = watch(countryKey, '')
  const { classes } = useStyles()
  return (
    <Box {...rootProps}>
      <Box display="flex">
        <FormSelect
          data={!!selectProps?.onFilter ? countryOptions.filter(selectProps.onFilter) : countryOptions}
          {...selectProps}
          name={countryKey}
          rules={countryRules}
          error={countryError?.message}
          styles={(theme, params) => {
            const styles =
              typeof restProps.styles === 'function' ? restProps.styles(theme, params) : restProps.styles || {}
            return {
              ...styles,
              wrapper: {
                ...(styles.wrapper || {}),
                ':hover': {
                  zIndex: 1
                },
                ':focus-within': {
                  zIndex: 1
                },
                zIndex: countryError ? 1 : undefined
              },
              error: {
                ...(styles.error || {}),
                display: 'none'
              },
              input: {
                ...(styles.input || {}),
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
              }
            }
          }}
        ></FormSelect>
        <FormPhoneInput
          country={country}
          rootProps={{ w: '100%', mb: 0 }}
          rules={rules}
          inputClass={classes.phoneInputContainer}
          styles={(theme) => {
            return {
              error: {
                display: 'none'
              }
            }
          }}
          showContryCodeAfterFocus={false}
          name={phoneKey}
          {...rest}
        />
      </Box>
      {(!!countryError?.message || !!phoneError?.message) && (
        <div className={classes.error}>{countryError?.message || phoneError?.message}</div>
      )}
    </Box>
  )
}
