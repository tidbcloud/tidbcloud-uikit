import * as React from 'react'
import { forwardRef } from 'react'
const Pilcrow01 = (props, ref) => {
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
        d="M16 4v16m0-16h2m-2 0h-5.5a4.5 4.5 0 0 0 0 9H16V4Zm-2 16h4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Pilcrow01)
export default ForwardRef
