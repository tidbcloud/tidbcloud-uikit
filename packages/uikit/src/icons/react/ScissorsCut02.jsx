import * as React from 'react'
import { forwardRef } from 'react'
const ScissorsCut02 = (props, ref) => {
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
        d="M4.5 8.6 21 17m0-10L4.5 15.4m13-3.4h.01M22 12h.01M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ScissorsCut02)
export default ForwardRef
