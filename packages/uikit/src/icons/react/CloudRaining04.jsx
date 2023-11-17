import * as React from 'react'
import { forwardRef } from 'react'
const CloudRaining04 = (props, ref) => {
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
        d="M16 18.5V21m-8-2.5V21m4-1.5V22m-5-7a5 5 0 1 1 .1-9.999 5.502 5.502 0 0 1 10.195 1.004A4.5 4.5 0 1 1 17.5 15H6.999Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CloudRaining04)
export default ForwardRef
