import * as React from 'react'
import { forwardRef } from 'react'
const Database02 = (props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      height: size,
      width: size
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 5c0 1.657-4.03 3-9 3S3 6.657 3 5m18 0c0-1.657-4.03-3-9-3S3 3.343 3 5m18 0v14c0 1.66-4 3-9 3s-9-1.34-9-3V5m18 4.72c0 1.66-4 3-9 3s-9-1.34-9-3m18 4.72c0 1.66-4 3-9 3s-9-1.34-9-3"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Database02)
export default ForwardRef
