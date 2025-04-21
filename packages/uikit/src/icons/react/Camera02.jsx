import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCamera02 = (props, ref) => {
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
        d="M1.33337 5.13468C1.33337 4.13991 2.13979 3.3335 3.13456 3.3335C3.65142 3.3335 4.11029 3.00276 4.27373 2.51243L4.33337 2.3335C4.3615 2.24911 4.37556 2.20692 4.39061 2.1695C4.58274 1.69158 5.03297 1.36707 5.54712 1.33593C5.58738 1.3335 5.63185 1.3335 5.7208 1.3335H10.2793C10.3682 1.3335 10.4127 1.3335 10.453 1.33593C10.9671 1.36707 11.4173 1.69158 11.6095 2.1695C11.6245 2.20692 11.6386 2.24911 11.6667 2.3335L11.7264 2.51243C11.8898 3.00276 12.3487 3.3335 12.8655 3.3335C13.8603 3.3335 14.6667 4.13991 14.6667 5.13468V10.8002C14.6667 11.9203 14.6667 12.4803 14.4487 12.9081C14.257 13.2845 13.951 13.5904 13.5747 13.7822C13.1469 14.0002 12.5868 14.0002 11.4667 14.0002H4.53337C3.41327 14.0002 2.85322 14.0002 2.42539 13.7822C2.04907 13.5904 1.74311 13.2845 1.55136 12.9081C1.33337 12.4803 1.33337 11.9203 1.33337 10.8002V5.13468Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M8.00004 11.0002C9.6569 11.0002 11 9.65702 11 8.00016C11 6.34331 9.6569 5.00016 8.00004 5.00016C6.34319 5.00016 5.00004 6.34331 5.00004 8.00016C5.00004 9.65702 6.34319 11.0002 8.00004 11.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCamera02)
const Camera02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Camera02', props.className].join(' ')}
    />
  )
})
Camera02.displayName = 'IconCamera02'
export default Camera02
