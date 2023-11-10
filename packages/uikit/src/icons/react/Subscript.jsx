import * as React from 'react'
import { forwardRef } from 'react'
const Subscript = (props, ref) => {
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
        d="m3 5 10 10m0-10L3 15m18 4h-4c0-1.5.44-2 1.5-2.5S21 15.33 21 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Subscript)
export default ForwardRef
