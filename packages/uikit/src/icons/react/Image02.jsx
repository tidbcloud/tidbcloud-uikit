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
      ref={ref}
      {...props}
    >
      <path
        d="M3.99988 13.3338L9.91258 7.42108C10.1766 7.15707 10.3086 7.02506 10.4608 6.9756C10.5947 6.9321 10.7389 6.9321 10.8728 6.9756C11.0251 7.02506 11.1571 7.15707 11.4211 7.42108L14.2703 10.2703M7.00016 5.66683C7.00016 6.40321 6.40321 7.00016 5.66683 7.00016C4.93045 7.00016 4.3335 6.40321 4.3335 5.66683C4.3335 4.93045 4.93045 4.3335 5.66683 4.3335C6.40321 4.3335 7.00016 4.93045 7.00016 5.66683ZM14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
