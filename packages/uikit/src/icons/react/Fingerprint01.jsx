import * as React from 'react'
import { forwardRef } from 'react'
const Fingerprint01 = (props, ref) => {
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
        d="M6.918 3.386A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10v.1M3.38 6.925A9.954 9.954 0 0 0 2 12c0 4.66 3.187 8.575 7.5 9.685m11.208-4.764a10.02 10.02 0 0 1-6.208 4.764m-.41-15.311A6 6 0 0 0 6.377 14.1m11.247-4.192a6 6 0 0 1-7.701 7.723M12 10v4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Fingerprint01)
export default ForwardRef
