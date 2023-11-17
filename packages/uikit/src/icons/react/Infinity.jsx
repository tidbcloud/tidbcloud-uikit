import * as React from 'react'
import { forwardRef } from 'react'
const Infinity = (props, ref) => {
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
        d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.74-8-4.584 0-4.584 8 0 8 5.607 0 7.645-8 12.74-8h0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Infinity)
export default ForwardRef
