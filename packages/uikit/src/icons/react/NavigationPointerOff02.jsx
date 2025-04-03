import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNavigationPointerOff02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M6.98099 3.65068L7.50887 2.44712C7.66328 2.09507 7.74048 1.91905 7.84841 1.86517C7.94215 1.81838 8.05243 1.81838 8.14616 1.86517C8.2541 1.91905 8.3313 2.09507 8.48571 2.44712L10.6006 7.26902M5.96462 5.96785L2.65455 13.5148C2.4835 13.9048 2.39797 14.0998 2.43578 14.2194C2.46855 14.323 2.5498 14.4041 2.65348 14.4368C2.77308 14.4745 2.96797 14.3887 3.35776 14.2172L7.78242 12.2704C7.86154 12.2355 7.9011 12.2181 7.9422 12.2113C7.97862 12.2052 8.0158 12.2052 8.05223 12.2113C8.09332 12.2181 8.13288 12.2355 8.21201 12.2704L12.6367 14.2172C13.0265 14.3887 13.2213 14.4745 13.3409 14.4368C13.4446 14.4041 13.5259 14.323 13.5586 14.2194C13.5964 14.0998 13.5109 13.9048 13.3399 13.5148L13.2038 13.2045M14.6668 14.6668L1.3335 1.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconNavigationPointerOff02)
const NavigationPointerOff02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'NavigationPointerOff02', props.className].join(' ')}
    />
  )
})
NavigationPointerOff02.displayName = 'IconNavigationPointerOff02'
export default NavigationPointerOff02
