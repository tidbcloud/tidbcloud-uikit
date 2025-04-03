import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTarget04 = (props, ref) => {
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
        d="M10.6668 5.33337V3.33337L12.6668 1.33337L13.3335 2.66671L14.6668 3.33337L12.6668 5.33337H10.6668ZM10.6668 5.33337L8.00014 8.00001M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337M11.3335 8.00004C11.3335 9.84099 9.84111 11.3334 8.00016 11.3334C6.15921 11.3334 4.66683 9.84099 4.66683 8.00004C4.66683 6.15909 6.15921 4.66671 8.00016 4.66671"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTarget04)
const Target04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Target04', props.className].join(' ')}
    />
  )
})
Target04.displayName = 'IconTarget04'
export default Target04
