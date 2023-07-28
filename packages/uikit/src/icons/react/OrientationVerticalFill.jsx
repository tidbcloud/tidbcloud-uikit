import * as React from 'react'
import { forwardRef } from 'react'
const OrientationVerticalFill = (props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="M4 13h4v7H4v-7ZM10 9h4v11h-4V9ZM16 4h4v16h-4V4Z" />
  </svg>
)
const ForwardRef = forwardRef(OrientationVerticalFill)
export default ForwardRef
