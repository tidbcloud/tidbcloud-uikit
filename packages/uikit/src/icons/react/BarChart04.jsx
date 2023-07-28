import * as React from 'react'
import { forwardRef } from 'react'
const BarChart04 = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 11v10m12-10v10M9 3v18M21 3v18"
    />
  </svg>
)
const ForwardRef = forwardRef(BarChart04)
export default ForwardRef
