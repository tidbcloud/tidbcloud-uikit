import * as React from 'react'
import { forwardRef } from 'react'
const Connect = (props, ref) => {
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
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.646 8.881-6.39 6.855M21.482 5.253a3.56 3.56 0 1 1-6.819 2.052 3.56 3.56 0 0 1 6.819-2.052Zm-11.243 12.06a3.56 3.56 0 1 1-6.819 2.051 3.56 3.56 0 0 1 6.819-2.052Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Connect)
export default ForwardRef
