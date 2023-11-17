import * as React from 'react'
import { forwardRef } from 'react'
const Sliders02 = (props, ref) => {
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
        d="M5 21v-6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-8V3m7 18v-6m0-8V3m0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 14v-4m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-8V3"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Sliders02)
export default ForwardRef
