import * as React from 'react'
import { forwardRef } from 'react'
const Coins01 = (props, ref) => {
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
        d="M15.938 15.938A7.001 7.001 0 0 0 15 2a7.001 7.001 0 0 0-6.938 6.062M16 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Coins01)
export default ForwardRef
