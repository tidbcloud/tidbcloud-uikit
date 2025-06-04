import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBell01 = (props, ref) => {
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
        d="M6.23609 13.9999C6.70618 14.4148 7.32367 14.6666 7.99997 14.6666C8.67627 14.6666 9.29377 14.4148 9.76385 13.9999M12 5.33325C12 4.27239 11.5785 3.25497 10.8284 2.50482C10.0783 1.75468 9.06084 1.33325 7.99997 1.33325C6.93911 1.33325 5.92169 1.75468 5.17154 2.50482C4.4214 3.25497 3.99997 4.27239 3.99997 5.33325C3.99997 7.39338 3.48029 8.80389 2.89975 9.73686C2.41006 10.5238 2.16521 10.9173 2.17419 11.0271C2.18413 11.1486 2.20988 11.195 2.30782 11.2676C2.39628 11.3333 2.79503 11.3333 3.59254 11.3333H12.4074C13.2049 11.3333 13.6037 11.3333 13.6921 11.2676C13.7901 11.195 13.8158 11.1486 13.8258 11.0271C13.8347 10.9173 13.5899 10.5238 13.1002 9.73686C12.5197 8.80389 12 7.39338 12 5.33325Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBell01)
const Bell01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Bell01', props.className].join(' ')}
    />
  )
})
Bell01.displayName = 'IconBell01'
export default Bell01
