import * as React from 'react'
import { forwardRef } from 'react'
const Divide03 = (props, ref) => {
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
        d="M12 8h.01M12 16h.01M7 12h10m-4.5-4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm9.5-4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Divide03)
export default ForwardRef
