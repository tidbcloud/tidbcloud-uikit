import * as React from 'react'
import { forwardRef } from 'react'
const BarVertical = (props, ref) => {
  if (typeof props.size === 'number') {
    props = {
      ...props,
      height: props.size,
      width: props.width
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 7h3.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054V21m0-10h3.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054V21M2 21h20M9.5 21V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C8.74 3 8.46 3 7.9 3H6.1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4.5 3.76 4.5 4.04 4.5 4.6V21h5Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BarVertical)
export default ForwardRef
