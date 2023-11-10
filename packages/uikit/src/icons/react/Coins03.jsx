import * as React from 'react'
import { forwardRef } from 'react'
const Coins03 = (props, ref) => {
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
        d="M10.101 4A7 7 0 0 1 20 13.899M16 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Coins03)
export default ForwardRef
