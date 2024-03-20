import { useState } from 'react'
import ReactPhoneInput2, { PhoneInputProps as ReactPhoneInputProps } from 'react-phone-input-2'

import {
  Input,
  InputWrapperBaseProps,
  useInputProps,
  Box,
  BoxProps,
  DefaultProps,
  InputWrapperStylesNames
} from '../../primitive/index.js'
import { mergeStylesList } from '../../utils/index.js'

import { useStyles } from './styles.js'

export { validPhoneNumber } from './helper.js'

// fuck esm/cjs interop https://github.com/evanw/esbuild/issues/1719#issuecomment-953470495
// @ts-ignore // prettier-ignore
const ReactPhoneInput: typeof ReactPhoneInput2 = ReactPhoneInput2.default ? ReactPhoneInput2.default : ReactPhoneInput2

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
  const { wrapperProps } = useInputProps('TextInput', {}, props)
  const { classes, cx } = useStyles({ hasError: !!wrapperProps.error })
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
  const [isPhoneInputFocus, setIsPhoneInputFocus] = useState(false)
  return (
    <Box {...boxProps}>
      <Input.Wrapper {...wrapperProps} styles={mergeStylesList([wrapperProps.styles, { label: { marginBottom: 8 } }])}>
        <ReactPhoneInput
          // controlled value
          value={value}
          // styles
          inputClass={cx(inputClass)}
          buttonClass={cx(classes.dropdownButton, buttonClass)}
          containerClass={cx(classes.container, containerClass)}
          disableDropdown
          dropdownClass={cx(dropdownClass)}
          searchClass={cx(searchClass)}
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
