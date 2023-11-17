import * as React from 'react'
import { forwardRef } from 'react'
const Droplets03 = (props, ref) => {
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
        d="M12.56 6.08A10.97 10.97 0 0 0 14 2.5c.5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97M7 15.78c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19-1.14-.93-2-2.31-2.29-3.76a6.585 6.585 0 0 1-2.29 3.76C3.56 9.46 3 10.58 3 11.73c0 2.22 1.8 4.05 4 4.05Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Droplets03)
export default ForwardRef
