import * as React from 'react'
import { forwardRef } from 'react'
const CloudRaining01 = (props, ref) => {
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
        d="M20 15.242a4.5 4.5 0 0 0-2.08-8.223 6.002 6.002 0 0 0-11.84 0A4.5 4.5 0 0 0 4 15.242M8 18v2m0-8v2m8 4v2m0-8v2m-4 6v2m0-8v2"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CloudRaining01)
export default ForwardRef
