import * as React from 'react'
import { forwardRef } from 'react'
const Hash02 = (props, ref) => {
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
        d="m9.5 3-3 18m11-18-3 18m6-13h-17m16 8h-17"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Hash02)
export default ForwardRef
