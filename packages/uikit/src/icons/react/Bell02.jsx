import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBell02 = (props, ref) => {
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
        d="M9.33318 13.9999H6.66652M11.9998 5.33325C11.9998 4.27239 11.5784 3.25497 10.8283 2.50482C10.0781 1.75468 9.06072 1.33325 7.99985 1.33325C6.93898 1.33325 5.92157 1.75468 5.17142 2.50482C4.42128 3.25497 3.99985 4.27239 3.99985 5.33325C3.99985 7.39338 3.48016 8.80389 2.89963 9.73686C2.40993 10.5238 2.16509 10.9173 2.17407 11.0271C2.18401 11.1486 2.20976 11.195 2.3077 11.2676C2.39616 11.3333 2.79491 11.3333 3.59242 11.3333H12.4073C13.2048 11.3333 13.6035 11.3333 13.692 11.2676C13.7899 11.195 13.8157 11.1486 13.8256 11.0271C13.8346 10.9173 13.5898 10.5238 13.1001 9.73686C12.5195 8.80389 11.9998 7.39338 11.9998 5.33325Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBell02)
const Bell02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Bell02', props.className].join(' ')}
    />
  )
})
Bell02.displayName = 'IconBell02'
export default Bell02
