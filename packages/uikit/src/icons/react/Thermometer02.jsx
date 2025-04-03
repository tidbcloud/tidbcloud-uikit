import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconThermometer02 = (props, ref) => {
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
        d="M9.66667 3.00016C9.66667 2.07969 8.92047 1.3335 8 1.3335C7.07953 1.3335 6.33333 2.07969 6.33333 3.00016V9.17201C5.52934 9.71019 5 10.6267 5 11.6668C5 13.3237 6.34315 14.6668 8 14.6668C9.65685 14.6668 11 13.3237 11 11.6668C11 10.6267 10.4707 9.71019 9.66667 9.17201V3.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12.3335C8.36819 12.3335 8.66667 12.035 8.66667 11.6668C8.66667 11.2986 8.36819 11.0002 8 11.0002C7.63181 11.0002 7.33333 11.2986 7.33333 11.6668C7.33333 12.035 7.63181 12.3335 8 12.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconThermometer02)
const Thermometer02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Thermometer02', props.className].join(' ')}
    />
  )
})
Thermometer02.displayName = 'IconThermometer02'
export default Thermometer02
