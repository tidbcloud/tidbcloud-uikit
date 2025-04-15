import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconZapCircle = (props, ref) => {
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
        d="M8.00016 3.66659L4.90789 8.16444C4.72174 8.43521 4.62866 8.57059 4.63425 8.68312C4.63912 8.78113 4.68693 8.87202 4.76493 8.93156C4.8545 8.99992 5.01879 8.99992 5.34738 8.99992H8.00016V12.3333L11.0924 7.8354C11.2786 7.56463 11.3717 7.42925 11.3661 7.31671C11.3612 7.2187 11.3134 7.12782 11.2354 7.06828C11.1458 6.99992 10.9815 6.99992 10.6529 6.99992H8.00016V3.66659Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconZapCircle)
const ZapCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ZapCircle', props.className].join(' ')}
    />
  )
})
ZapCircle.displayName = 'IconZapCircle'
export default ZapCircle
