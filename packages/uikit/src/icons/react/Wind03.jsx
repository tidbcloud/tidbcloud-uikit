import * as React from 'react'
import { forwardRef } from 'react'
const Wind03 = (props, ref) => {
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
        d="M16.764 6.5a3 3 0 1 1 2.236 5h-6M6.764 4A3 3 0 1 1 9 9H2m8.764 11A3 3 0 1 0 13 15H2"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Wind03)
export default ForwardRef
