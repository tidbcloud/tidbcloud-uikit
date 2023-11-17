import * as React from 'react'
import { forwardRef } from 'react'
const Thermometer02 = (props, ref) => {
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
        d="M14.5 4.5a2.5 2.5 0 0 0-5 0v9.258a4.5 4.5 0 1 0 5 0V4.5Z"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Thermometer02)
export default ForwardRef
