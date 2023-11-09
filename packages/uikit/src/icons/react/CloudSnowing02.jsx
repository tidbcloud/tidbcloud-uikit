import * as React from 'react'
import { forwardRef } from 'react'
const CloudSnowing02 = (props, ref) => {
  if (typeof props.size === 'number') {
    props = {
      ...props,
      height: props.size,
      width: props.width
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 18h.01M8 21h.01M12 18.5h.01m-.01 3h.01M16 18h.01M16 21h.01M7 15a5 5 0 1 1 .1-9.999 5.502 5.502 0 0 1 10.195 1.004A4.5 4.5 0 1 1 17.5 15H6.999Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CloudSnowing02)
export default ForwardRef
