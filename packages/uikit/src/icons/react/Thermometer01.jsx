import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconThermometer01 = (props, ref) => {
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
        d="M9.66667 3.00016C9.66667 2.07969 8.92047 1.3335 8 1.3335C7.07953 1.3335 6.33333 2.07969 6.33333 3.00016V9.17201C5.52934 9.71019 5 10.6267 5 11.6668C5 13.3237 6.34315 14.6668 8 14.6668C9.65685 14.6668 11 13.3237 11 11.6668C11 10.6267 10.4707 9.71019 9.66667 9.17201V3.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconThermometer01)
const Thermometer01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Thermometer01', props.className].join(' ')}
    />
  )
})
Thermometer01.displayName = 'IconThermometer01'
export default Thermometer01
