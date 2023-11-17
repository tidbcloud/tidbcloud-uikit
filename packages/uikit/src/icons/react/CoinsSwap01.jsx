import * as React from 'react'
import { forwardRef } from 'react'
const CoinsSwap01 = (props, ref) => {
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
        d="m6 6 2-2m0 0L6 2m2 2H6a4 4 0 0 0-4 4m16 10-2 2m0 0 2 2m-2-2h2a4 4 0 0 0 4-4m-8.583-2.583a6 6 0 1 0-2.834-2.834M14 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CoinsSwap01)
export default ForwardRef
