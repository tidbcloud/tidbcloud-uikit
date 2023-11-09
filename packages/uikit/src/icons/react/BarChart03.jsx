import * as React from 'react'
import { forwardRef } from 'react'
const BarChart03 = (props, ref) => {
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
        d="M6 20V4m12 16v-4m-6 4V10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BarChart03)
export default ForwardRef
