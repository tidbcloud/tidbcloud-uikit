import * as React from 'react'
import { forwardRef } from 'react'
const ArrowCircleBrokenLeft = (props, ref) => {
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
        d="M20.662 17A9.996 9.996 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.996 9.996 0 0 1 8.662 5M12 8l-4 4m0 0 4 4m-4-4h14"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ArrowCircleBrokenLeft)
export default ForwardRef
