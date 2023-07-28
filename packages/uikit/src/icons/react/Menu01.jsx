import * as React from 'react'
import { forwardRef } from 'react'
const Menu01 = (props, ref) => (
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
      d="M3 12h18M3 6h18M3 18h18"
    />
  </svg>
)
const ForwardRef = forwardRef(Menu01)
export default ForwardRef
