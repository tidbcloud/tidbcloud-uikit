import * as React from 'react'
import { forwardRef } from 'react'
const BarChart10 = (props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      height: size,
      width: size
    }
  }
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
        d="M9 7H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 7.76 3 8.04 3 8.6v10.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21H9m0 0h6m-6 0V4.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 3 10.04 3 10.6 3h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 3.76 15 4.04 15 4.6V21m0-10h4.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 11.76 21 12.04 21 12.6v6.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 21 19.96 21 19.4 21H15"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BarChart10)
export default ForwardRef
