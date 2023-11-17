import * as React from 'react'
import { forwardRef } from 'react'
const Expand02 = (props, ref) => {
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
        d="M3 21 21 3M3 21h6m-6 0v-6M21 3h-6m6 0v6"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Expand02)
export default ForwardRef
