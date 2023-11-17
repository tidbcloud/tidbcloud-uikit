import * as React from 'react'
import { forwardRef } from 'react'
const XClose = (props, ref) => {
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
        d="M18 6 6 18M6 6l12 12"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(XClose)
export default ForwardRef
