import * as React from 'react'
import { forwardRef } from 'react'
const BarChart02 = (props, ref) => {
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
        d="M18 20V4M6 20v-4m6 4V10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BarChart02)
export default ForwardRef
