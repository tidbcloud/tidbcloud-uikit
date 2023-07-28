import * as React from 'react'
import { forwardRef } from 'react'
const SeeShort = (props, ref) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="inherit" d="M20 12.5H3" />
  </svg>
)
const ForwardRef = forwardRef(SeeShort)
export default ForwardRef
