import * as React from 'react'
import { forwardRef } from 'react'
const CloudMoon = (props, ref) => {
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
        d="M16.5 13a5.502 5.502 0 0 0 5.337-4.164 5.5 5.5 0 0 1-6.673-6.672 5.502 5.502 0 0 0-3.548 7.867M5 7V3M3 5h4M6 22a4 4 0 0 1-.679-7.943 6.003 6.003 0 0 1 10.968-.892A4.5 4.5 0 1 1 17.5 22H6.001Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CloudMoon)
export default ForwardRef
