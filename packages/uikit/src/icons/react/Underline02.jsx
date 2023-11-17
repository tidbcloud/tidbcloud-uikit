import * as React from 'react'
import { forwardRef } from 'react'
const Underline02 = (props, ref) => {
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
        d="M19 4v6a7 7 0 1 1-14 0V4m3.5 0v6a7.003 7.003 0 0 0 5.14 6.75M4 21h16M3 4h7.5M17 4h4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Underline02)
export default ForwardRef
