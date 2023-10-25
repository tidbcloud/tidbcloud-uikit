import * as React from 'react'
import { forwardRef } from 'react'
const SwitchVertical02 = (props, ref) => {
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
        d="M7 4v16m0 0-4-4m4 4 4-4m6 4V4m0 0-4 4m4-4 4 4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SwitchVertical02)
export default ForwardRef
