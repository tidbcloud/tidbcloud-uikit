import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBellRinging03 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M10.0001 12.6666C10.0001 13.7712 9.10469 14.6666 8.00012 14.6666C6.89556 14.6666 6.00012 13.7712 6.00012 12.6666M9.19779 4.15896C9.48812 3.85901 9.66679 3.45033 9.66679 2.99992C9.66679 2.07944 8.9206 1.33325 8.00012 1.33325C7.07965 1.33325 6.33346 2.07944 6.33346 2.99992C6.33346 3.45033 6.51213 3.85901 6.80246 4.15896M1.69801 5.54856C1.68844 4.58099 2.2101 3.67746 3.05281 3.20196M14.3022 5.54856C14.3118 4.58099 13.7902 3.67746 12.9474 3.20196M12.0001 7.46659C12.0001 6.54717 11.5787 5.66541 10.8286 5.01528C10.0784 4.36516 9.06099 3.99992 8.00012 3.99992C6.93926 3.99992 5.92184 4.36516 5.1717 5.01528C4.42155 5.66541 4.00013 6.54717 4.00013 7.46659C4.00013 8.98779 3.62288 10.1003 3.15217 10.8964C2.61568 11.8037 2.34744 12.2573 2.35804 12.3657C2.37015 12.4897 2.39247 12.5288 2.49302 12.6023C2.58091 12.6666 3.02247 12.6666 3.90558 12.6666H12.0947C12.9778 12.6666 13.4193 12.6666 13.5072 12.6023C13.6078 12.5288 13.6301 12.4897 13.6422 12.3657C13.6528 12.2573 13.3846 11.8037 12.8481 10.8964C12.3774 10.1003 12.0001 8.98779 12.0001 7.46659Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBellRinging03)
const BellRinging03 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'BellRinging03', props.className].join(' ')}
    />
  )
})
BellRinging03.displayName = 'IconBellRinging03'
export default BellRinging03
