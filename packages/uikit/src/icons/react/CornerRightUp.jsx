import * as React from 'react'
import { forwardRef } from 'react'
const CornerRightUp = (props, ref) => {
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
        d="M3 20h3.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C16 15.44 16 13.76 16 10.4V4m0 0-5 5m5-5 5 5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CornerRightUp)
export default ForwardRef
