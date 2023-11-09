import * as React from 'react'
import { forwardRef } from 'react'
const Italic01 = (props, ref) => {
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
        d="M19 4h-9m4 16H5M15 4 9 20"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Italic01)
export default ForwardRef
