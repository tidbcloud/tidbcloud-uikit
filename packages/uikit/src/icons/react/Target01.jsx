import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTarget01 = (props, ref) => {
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
        d="M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667M14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337M14.6668 8.00004H12.0002M8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004M8.00016 14.6667V12M1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337M1.3335 8.00004H4.00016M8.00016 1.33337V4.00004"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTarget01)
const Target01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Target01', props.className].join(' ')}
    />
  )
})
Target01.displayName = 'IconTarget01'
export default Target01
