import * as React from 'react'
import { forwardRef } from 'react'
const OrientationHorizontalFill = (props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="M11 4v4H4V4h7ZM15 10v4H4v-4h11ZM20 16v4H4v-4h16Z" />
  </svg>
)
const ForwardRef = forwardRef(OrientationHorizontalFill)
export default ForwardRef
