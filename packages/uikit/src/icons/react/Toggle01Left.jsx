import * as React from 'react'
import { forwardRef } from 'react'
const Toggle01Left = (props, ref) => {
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
        d="M7 17h10a5 5 0 0 0 0-10H7m0 10A5 5 0 0 1 7 7m0 10A5 5 0 0 0 7 7"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Toggle01Left)
export default ForwardRef
