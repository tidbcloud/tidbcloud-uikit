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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M6.98081 3.65068L7.50869 2.44712C7.66309 2.09507 7.7403 1.91905 7.84823 1.86517C7.94197 1.81838 8.05225 1.81838 8.14598 1.86517C8.25391 1.91905 8.33112 2.09507 8.48553 2.44712L10.6004 7.26902M5.96443 5.96785L2.65436 13.5148C2.48331 13.9048 2.39779 14.0998 2.43559 14.2194C2.46837 14.323 2.54961 14.4041 2.65329 14.4368C2.77289 14.4745 2.96779 14.3887 3.35758 14.2172L7.78224 12.2704C7.86136 12.2355 7.90092 12.2181 7.94201 12.2113C7.97844 12.2052 8.01562 12.2052 8.05204 12.2113C8.09314 12.2181 8.1327 12.2355 8.21182 12.2704L12.6365 14.2172C13.0263 14.3887 13.2212 14.4745 13.3408 14.4368C13.4444 14.4041 13.5257 14.323 13.5585 14.2194C13.5963 14.0998 13.5107 13.9048 13.3397 13.5148L13.2036 13.2045M14.6666 14.6668L1.33331 1.3335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
