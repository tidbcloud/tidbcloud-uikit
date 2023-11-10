import * as React from 'react'
import { forwardRef } from 'react'
const CloudRaining05 = (props, ref) => {
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
        d="M16 18.5 15 21m-7-2.5L7 21m5-2.5L11 21m-4-6a5 5 0 1 1 .1-9.999 5.502 5.502 0 0 1 10.195 1.004A4.5 4.5 0 1 1 17.5 15H6.999Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CloudRaining05)
export default ForwardRef
