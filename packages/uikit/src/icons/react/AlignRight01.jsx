import * as React from 'react'
import { forwardRef } from 'react'
const AlignRight01 = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21V3M3 12h14m0 0-7-7m7 7-7 7"
    />
  </svg>
)
const ForwardRef = forwardRef(AlignRight01)
export default ForwardRef
