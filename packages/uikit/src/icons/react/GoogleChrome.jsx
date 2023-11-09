import * as React from 'react'
import { forwardRef } from 'react'
const GoogleChrome = (props, ref) => {
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
        d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 0h9.17M3.95 6.06 8.54 14m2.34 7.94L15.46 14M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(GoogleChrome)
export default ForwardRef
