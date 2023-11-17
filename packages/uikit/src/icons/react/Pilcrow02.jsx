import * as React from 'react'
import { forwardRef } from 'react'
const Pilcrow02 = (props, ref) => {
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
        d="M17.5 4v16m2-16H9a4 4 0 1 0 0 8h5m0-8v16m-2 0h7.5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Pilcrow02)
export default ForwardRef
