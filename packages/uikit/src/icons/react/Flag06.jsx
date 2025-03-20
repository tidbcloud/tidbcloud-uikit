import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlag06 = (props, ref) => {
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
        d="M4 21V4m0 9h7.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C13 12.24 13 11.96 13 11.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C12.24 3 11.96 3 11.4 3H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 3.76 4 4.04 4 4.6zm9-8h6.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 5.76 21 6.04 21 6.6v6.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 15 19.96 15 19.4 15h-4.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C13 14.24 13 13.96 13 13.4z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlag06)
const Flag06 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Flag06'].join(' ')}
    />
  )
})
Flag06.displayName = 'IconFlag06'
export default Flag06
