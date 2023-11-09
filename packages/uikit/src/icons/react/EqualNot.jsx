import * as React from 'react'
import { forwardRef } from 'react'
const EqualNot = (props, ref) => {
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
        d="M5 9h14M5 15h14m0-10L5 19"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(EqualNot)
export default ForwardRef
