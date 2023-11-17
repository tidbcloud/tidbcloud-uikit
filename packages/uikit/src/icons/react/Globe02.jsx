import * as React from 'react'
import { forwardRef } from 'react'
const Globe02 = (props, ref) => {
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
        d="m2.661 18.34 4.594-4.595M18.218 2.783A9.5 9.5 0 1 1 4.783 16.218M17 22H7m5 0v-3m5.5-9.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Globe02)
export default ForwardRef
