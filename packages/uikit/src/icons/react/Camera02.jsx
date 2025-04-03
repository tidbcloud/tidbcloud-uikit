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
      ref={ref}
      {...props}
    >
      <path
        d="M1.3335 5.13468C1.3335 4.13991 2.13991 3.3335 3.13468 3.3335C3.65154 3.3335 4.11041 3.00276 4.27385 2.51243L4.3335 2.3335C4.36162 2.24911 4.37569 2.20692 4.39073 2.1695C4.58286 1.69158 5.03309 1.36707 5.54724 1.33593C5.5875 1.3335 5.63198 1.3335 5.72092 1.3335H10.2794C10.3683 1.3335 10.4128 1.3335 10.4531 1.33593C10.9672 1.36707 11.4175 1.69158 11.6096 2.1695C11.6246 2.20692 11.6387 2.24911 11.6668 2.3335L11.7265 2.51243C11.8899 3.00276 12.3488 3.3335 12.8656 3.3335C13.8604 3.3335 14.6668 4.13991 14.6668 5.13468V10.8002C14.6668 11.9203 14.6668 12.4803 14.4488 12.9081C14.2571 13.2845 13.9511 13.5904 13.5748 13.7822C13.147 14.0002 12.5869 14.0002 11.4668 14.0002H4.5335C3.41339 14.0002 2.85334 14.0002 2.42552 13.7822C2.04919 13.5904 1.74323 13.2845 1.55148 12.9081C1.3335 12.4803 1.3335 11.9203 1.3335 10.8002V5.13468Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00016 11.0002C9.65702 11.0002 11.0002 9.65702 11.0002 8.00016C11.0002 6.34331 9.65702 5.00016 8.00016 5.00016C6.34331 5.00016 5.00016 6.34331 5.00016 8.00016C5.00016 9.65702 6.34331 11.0002 8.00016 11.0002Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
