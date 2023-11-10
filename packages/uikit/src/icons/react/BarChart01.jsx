import * as React from 'react'
import { forwardRef } from 'react'
const BarChart01 = (props, ref) => {
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
        d="M18 20V10m-6 10V4M6 20v-6"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BarChart01)
export default ForwardRef
