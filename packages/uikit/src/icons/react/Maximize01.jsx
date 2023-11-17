import * as React from 'react'
import { forwardRef } from 'react'
const Maximize01 = (props, ref) => {
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
        d="m14 10 7-7m0 0h-6m6 0v6m-11 5-7 7m0 0h6m-6 0v-6"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Maximize01)
export default ForwardRef
