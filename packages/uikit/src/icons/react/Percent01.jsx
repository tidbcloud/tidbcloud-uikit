import * as React from 'react'
import { forwardRef } from 'react'
const Percent01 = (props, ref) => {
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
        d="M19 5 5 19M7.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Percent01)
export default ForwardRef
