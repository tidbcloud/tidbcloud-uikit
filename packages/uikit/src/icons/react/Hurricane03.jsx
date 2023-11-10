import * as React from 'react'
import { forwardRef } from 'react'
const Hurricane03 = (props, ref) => {
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
        d="M21 4H3m17 4H6m12 4H9m6 4H8m9 4h-5"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Hurricane03)
export default ForwardRef
