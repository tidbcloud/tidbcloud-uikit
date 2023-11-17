import * as React from 'react'
import { forwardRef } from 'react'
const ThermometerCold = (props, ref) => {
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
        d="M2 12h10M9 4v16M3 9l3 3-3 3m9-9L9 9 6 6m0 12 3-3 1.5 1.5m9.5-1.965V4a2 2 0 1 0-4 0v10.535a4 4 0 1 0 4 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ThermometerCold)
export default ForwardRef
