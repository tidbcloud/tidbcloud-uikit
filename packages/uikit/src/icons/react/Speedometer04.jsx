import * as React from 'react'
import { forwardRef } from 'react'
const Speedometer04 = (props, ref) => {
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
        d="M17.745 16a7.026 7.026 0 0 0 1.094-5.5M6.255 16a7 7 0 0 1 6.982-10.891M16.5 7.5 12 12m10 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Speedometer04)
export default ForwardRef
