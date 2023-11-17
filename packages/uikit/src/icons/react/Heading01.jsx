import * as React from 'react'
import { forwardRef } from 'react'
const Heading01 = (props, ref) => {
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
        d="M6 4v16M18 4v16M8 4H4m14 8H6m2 8H4m16 0h-4m4-16h-4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Heading01)
export default ForwardRef
