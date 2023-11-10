import * as React from 'react'
import { forwardRef } from 'react'
const ArrowNarrowUpRight = (props, ref) => {
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
        d="M6 18 18 6m0 0h-8m8 0v8"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ArrowNarrowUpRight)
export default ForwardRef
