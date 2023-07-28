import * as React from 'react'
import { forwardRef } from 'react'
const RefreshCw01 = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 10s-2.005-2.732-3.634-4.362a9 9 0 1 0 2.282 8.862M21 10V4m0 6h-6"
    />
  </svg>
)
const ForwardRef = forwardRef(RefreshCw01)
export default ForwardRef
