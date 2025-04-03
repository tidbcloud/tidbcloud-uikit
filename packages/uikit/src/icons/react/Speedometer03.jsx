import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSpeedometer03 = (props, ref) => {
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
        d="M3.3335 8.00004C3.3335 5.42271 5.42283 3.33337 8.00016 3.33337M11.0001 5.00004L8.0001 8.00004M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337C11.6821 1.33337 14.6668 4.31814 14.6668 8.00004ZM8.66683 8.00004C8.66683 8.36823 8.36835 8.66671 8.00016 8.66671C7.63197 8.66671 7.3335 8.36823 7.3335 8.00004C7.3335 7.63185 7.63197 7.33337 8.00016 7.33337C8.36835 7.33337 8.66683 7.63185 8.66683 8.00004Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSpeedometer03)
const Speedometer03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Speedometer03', props.className].join(' ')}
    />
  )
})
Speedometer03.displayName = 'IconSpeedometer03'
export default Speedometer03
