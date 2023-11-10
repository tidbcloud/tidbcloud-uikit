import * as React from 'react'
import { forwardRef } from 'react'
const Link05 = (props, ref) => {
  if (typeof props.size === 'number') {
    props = {
      ...props,
      height: props.size,
      width: props.width
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 17H7A5 5 0 0 1 7 7h2m-1 5h10m-2.222 5H17a5 5 0 0 0 0-10h-1.222a.778.778 0 0 0-.778.778v8.444c0 .43.348.778.778.778Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Link05)
export default ForwardRef
