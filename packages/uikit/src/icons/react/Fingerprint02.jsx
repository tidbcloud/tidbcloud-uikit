import * as React from 'react'
import { forwardRef } from 'react'
const Fingerprint02 = (props, ref) => {
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
        d="M12 10v4M7.447 3.421A8 8 0 0 1 20 10v1.237M4.416 7.447A7.99 7.99 0 0 0 4 10v4a8.004 8.004 0 0 0 5.744 7.677m9.915-5.358a8.02 8.02 0 0 1-4.922 5.2m-.412-15.373A4.5 4.5 0 0 0 7.5 10v2.95m9-1.91V14a4.5 4.5 0 0 1-6.82 3.857"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Fingerprint02)
export default ForwardRef
