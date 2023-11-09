import * as React from 'react'
import { forwardRef } from 'react'
const IntersectCircle = (props, ref) => {
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
        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IntersectCircle)
export default ForwardRef
