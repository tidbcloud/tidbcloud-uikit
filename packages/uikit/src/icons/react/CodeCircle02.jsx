import * as React from 'react'
import { forwardRef } from 'react'
const CodeCircle02 = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14 17 3-3-3-3m-4-4-3 3 3 3m12-1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
)
const ForwardRef = forwardRef(CodeCircle02)
export default ForwardRef
