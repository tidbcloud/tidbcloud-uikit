import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconImage02 = (props, ref) => {
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
        d="M3.99976 13.3338L9.91246 7.42108C10.1765 7.15707 10.3085 7.02506 10.4607 6.9756C10.5946 6.9321 10.7388 6.9321 10.8727 6.9756C11.0249 7.02506 11.1569 7.15707 11.421 7.42108L14.2702 10.2703M7.00004 5.66683C7.00004 6.40321 6.40309 7.00016 5.66671 7.00016C4.93033 7.00016 4.33337 6.40321 4.33337 5.66683C4.33337 4.93045 4.93033 4.3335 5.66671 4.3335C6.40309 4.3335 7.00004 4.93045 7.00004 5.66683ZM14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8.00004 14.6668C4.31814 14.6668 1.33337 11.6821 1.33337 8.00016C1.33337 4.31826 4.31814 1.3335 8.00004 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconImage02)
const Image02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Image02', props.className].join(' ')}
    />
  )
})
Image02.displayName = 'IconImage02'
export default Image02
