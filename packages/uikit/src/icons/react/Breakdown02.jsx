import * as React from 'react'
import { forwardRef } from 'react'
const Breakdown02 = (props, ref) => (
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
      d="M17.4 12h-7.364m7.364 4.5h-7.364m7.364-9h-7.364M7.091 12H6.6m.49 4.5H6.6m.49-9H6.6M21 7.32v9.36c0 1.512 0 2.268-.294 2.846a2.7 2.7 0 0 1-1.18 1.18C18.948 21 16.392 21 14.88 21H9.12c-1.512 0-4.068 0-4.646-.294a2.7 2.7 0 0 1-1.18-1.18C3 18.948 3 18.192 3 16.68V7.32c0-1.512 0-2.268.294-2.846a2.7 2.7 0 0 1 1.18-1.18C5.052 3 7.608 3 9.12 3h5.76c1.512 0 4.068 0 4.646.294a2.7 2.7 0 0 1 1.18 1.18C21 5.052 21 5.808 21 7.32Z"
    />
  </svg>
)
const ForwardRef = forwardRef(Breakdown02)
export default ForwardRef
