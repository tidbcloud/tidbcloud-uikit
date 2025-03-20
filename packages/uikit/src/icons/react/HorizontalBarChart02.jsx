import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHorizontalBarChart02 = (props, ref) => {
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
        d="M17 9.5v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3m10 0v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3M3 2v20M3 9.5h16.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 8.74 21 8.46 21 7.9V6.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 4.5 19.96 4.5 19.4 4.5H3z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHorizontalBarChart02)
const HorizontalBarChart02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'HorizontalBarChart02'].join(' ')}
    />
  )
})
HorizontalBarChart02.displayName = 'IconHorizontalBarChart02'
export default HorizontalBarChart02
