import * as React from 'react'
import { forwardRef } from 'react'
const YAxis = (props, ref) => {
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
        d="M12 21V3m-2 0h4m-4 18h4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(YAxis)
export default ForwardRef
