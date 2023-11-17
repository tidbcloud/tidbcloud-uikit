import * as React from 'react'
import { forwardRef } from 'react'
const SwitchVertical01 = (props, ref) => {
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
        d="M17 4v16m0 0-4-4m4 4 4-4M7 20V4m0 0L3 8m4-4 4 4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SwitchVertical01)
export default ForwardRef
