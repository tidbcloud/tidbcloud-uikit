import * as React from 'react'
import { forwardRef } from 'react'
const Headphones01 = (props, ref) => {
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
        d="M21 18v-6a9 9 0 1 0-18 0v6m2.5 3A2.5 2.5 0 0 1 3 18.5v-2a2.5 2.5 0 0 1 5 0v2A2.5 2.5 0 0 1 5.5 21Zm13 0a2.5 2.5 0 0 1-2.5-2.5v-2a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1-2.5 2.5Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Headphones01)
export default ForwardRef
