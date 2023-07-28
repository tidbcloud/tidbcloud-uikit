import * as React from 'react'
import { forwardRef } from 'react'
const Expand08 = (props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="inherit"
      d="m7.75 8.25 4-4 4 4m-8 7.5 4 4 4-4"
    />
  </svg>
)
const ForwardRef = forwardRef(Expand08)
export default ForwardRef
