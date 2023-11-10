import * as React from 'react'
import { forwardRef } from 'react'
const Strikethrough02 = (props, ref) => {
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
        d="M6 16a4 4 0 0 0 4 4h4a4 4 0 0 0 0-8m-3.5 8a4 4 0 0 0 0-8M18 8a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4m7.5-4a4 4 0 0 0-4 4M3 12h18"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Strikethrough02)
export default ForwardRef
