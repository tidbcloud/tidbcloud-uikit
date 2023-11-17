import * as React from 'react'
import { forwardRef } from 'react'
const Umbrella01 = (props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      height: size,
      width: size
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 19.4c0 1.436-1.12 2.6-2.5 2.6S12 20.836 12 19.4V12m-9.874-1.594C2.89 5.641 7.02 2 12 2s9.11 3.64 9.874 8.406c.074.465.111.698.018.946a1.097 1.097 0 0 1-.44.516c-.23.132-.504.132-1.052.132H3.6c-.548 0-.821 0-1.052-.132a1.097 1.097 0 0 1-.44-.516c-.093-.248-.056-.48.018-.946Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Umbrella01)
export default ForwardRef
