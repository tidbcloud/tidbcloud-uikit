import * as React from 'react'
import { forwardRef } from 'react'
const ClockCheck = (props, ref) => {
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
        d="m14.5 19 2 2 4.5-4.5m.985-3.95c.01-.182.015-.366.015-.55 0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.435 4.337 9.858 9.739 9.997M12 6v6l3.738 1.87"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ClockCheck)
export default ForwardRef
