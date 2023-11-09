import * as React from 'react'
import { forwardRef } from 'react'
const TrendUp02 = (props, ref) => {
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
        d="M7 17 17 7m0 0H7m10 0v10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(TrendUp02)
export default ForwardRef
