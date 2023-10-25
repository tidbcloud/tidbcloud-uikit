import * as React from 'react'
import { forwardRef } from 'react'
const AlignLeft01 = (props, ref) => {
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
        d="M3 3v18m18-9H7m0 0 7 7m-7-7 7-7"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(AlignLeft01)
export default ForwardRef
