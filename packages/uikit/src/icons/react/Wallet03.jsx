import * as React from 'react'
import { forwardRef } from 'react'
const Wallet03 = (props, ref) => {
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
        d="M16.5 14h.01M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 1-2-2Zm0 0a2 2 0 0 1 2-2h12m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Wallet03)
export default ForwardRef
