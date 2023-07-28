import * as React from 'react'
import { forwardRef } from 'react'
const SwitchHorizontal02 = (props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="inherit"
      d="M4 17h16m0 0-4-4m4 4-4 4m4-14H4m0 0 4-4M4 7l4 4"
    />
  </svg>
)
const ForwardRef = forwardRef(SwitchHorizontal02)
export default ForwardRef
