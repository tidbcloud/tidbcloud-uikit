import * as React from 'react'
import { forwardRef } from 'react'
const DatabaseNone = (props, ref) => {
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
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5L21 19C21 20.66 17 22 12 22C7 22 3 20.66 3 19L3 5M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12"
        stroke-width="inherit"
        stroke-dasharray="2 2"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(DatabaseNone)
export default ForwardRef
