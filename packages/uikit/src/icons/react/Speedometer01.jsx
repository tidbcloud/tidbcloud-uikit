import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSpeedometer01 = (props, ref) => {
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
        d="M8.00016 1.33337V3.00004M8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004M8.00016 1.33337C11.6821 1.33337 14.6668 4.31814 14.6668 8.00004M8.00016 13V14.6667M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004M8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004M3.00016 8.00004H1.3335M14.6668 8.00004H13.0002M12.7191 12.719L11.5366 11.5365M3.28125 12.719L4.46493 11.5353M3.28125 3.33337L4.43888 4.49101M12.7191 3.33337L9.0001 7.00004M9.3335 8.00004C9.3335 8.73642 8.73654 9.33337 8.00016 9.33337C7.26378 9.33337 6.66683 8.73642 6.66683 8.00004C6.66683 7.26366 7.26378 6.66671 8.00016 6.66671C8.73654 6.66671 9.3335 7.26366 9.3335 8.00004Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSpeedometer01)
const Speedometer01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Speedometer01', props.className].join(' ')}
    />
  )
})
Speedometer01.displayName = 'IconSpeedometer01'
export default Speedometer01
