import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHorizontalBarChart01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 9.5V6.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C16.24 4.5 15.96 4.5 15.4 4.5H3m10 10v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3M3 2v20m0-7.5h16.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 13.74 21 13.46 21 12.9v-1.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 9.5 19.96 9.5 19.4 9.5H3z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHorizontalBarChart01)
const HorizontalBarChart01 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
HorizontalBarChart01.displayName = 'IconHorizontalBarChart01'
export default HorizontalBarChart01
