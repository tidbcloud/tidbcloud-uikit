import * as React from 'react'
import { forwardRef } from 'react'
const Activity = (props, ref) => {
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
        d="M22 12h-4l-3 9L9 3l-3 9H2"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Activity)
export default ForwardRef
