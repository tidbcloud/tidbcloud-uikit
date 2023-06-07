import {
  Input,
  InputWrapperBaseProps,
  useInputProps,
  Box,
  BoxProps,
  DefaultProps,
  InputWrapperStylesNames
} from '@mantine/core'
import React, { useState } from 'react'
import ReactPhoneInput, { PhoneInputProps as ReactPhoneInputProps } from 'react-phone-input-2'

import useStyles from './styles'

export interface PhoneInputProps
  extends ReactPhoneInputProps,
    InputWrapperBaseProps,
    DefaultProps<InputWrapperStylesNames> {
  rootProps?: BoxProps
  /**
   * only after the first time input focus, shows country dial code
   */
  showContryCodeAfterFocus?: boolean
  country?: string
}

export const PhoneInput: React.FC<PhoneInputProps> = (props) => {
  const { classes, cx } = useStyles()
  const {
    value,
    placeholder = '',
    inputClass,
    buttonClass,
    containerClass,
    dropdownClass,
    searchClass,
    showContryCodeAfterFocus,
    country = '',
    onFocus,
    // Box props,
    rootProps: boxProps,
    ...rest
  } = props
  const { wrapperProps } = useInputProps('TextInput', {}, props)
  const [isPhoneInputFocus, setIsPhoneInputFocus] = useState(false)
  return (
    <Box {...boxProps}>
      <Input.Wrapper {...wrapperProps}>
        <ReactPhoneInput
          // controlled value
          value={value}
          // styles
          inputClass={cx(classes.input, { [classes.inputError]: wrapperProps.error }, inputClass)}
          buttonClass={cx(classes.dropdownButton, buttonClass)}
          containerClass={cx(classes.container, { [classes.containerError]: wrapperProps.error }, containerClass)}
          disableDropdown
          dropdownClass={cx(classes.dropdown, dropdownClass)}
          searchClass={cx(classes.search, searchClass)}
          // input props
          placeholder={placeholder}
          specialLabel=""
          country={showContryCodeAfterFocus && isPhoneInputFocus ? country.toLowerCase() : undefined}
          onFocus={(e, data) => {
            setIsPhoneInputFocus(true)
            onFocus?.(e, data)
          }}
          masks={{ cn: '...........' }}
          {...rest}
        />
      </Input.Wrapper>
    </Box>
  )
}
