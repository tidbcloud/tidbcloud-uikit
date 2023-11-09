import * as React from 'react'
import { forwardRef } from 'react'
const Asterisk02 = (props, ref) => {
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
        d="M12 4v16m6-14L6 18m14-6H4m14 6L6 6"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Asterisk02)
export default ForwardRef
