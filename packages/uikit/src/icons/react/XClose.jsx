import * as React from 'react'
import { forwardRef } from 'react'
const XClose = (props, ref) => {
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
        d="M18 6 6 18M6 6l12 12"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(XClose)
export default ForwardRef
