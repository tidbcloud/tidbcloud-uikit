import * as React from 'react'
import { forwardRef } from 'react'
const Right = (props, ref) => {
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
        d="m4 12.667 3.646 4.389c.031.037.064.07.098.105.233.236.724.839 1.18.839.458 0 1.13-.772 1.22-.877a1.6 1.6 0 0 1 .02-.024L20 6"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Right)
export default ForwardRef
