import * as React from 'react'
import { forwardRef } from 'react'
const Expand08 = (props, ref) => {
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
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.75 8.25 4-4 4 4m-8 7.5 4 4 4-4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Expand08)
export default ForwardRef
