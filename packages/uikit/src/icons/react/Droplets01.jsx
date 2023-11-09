import * as React from 'react'
import { forwardRef } from 'react'
const Droplets01 = (props, ref) => {
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
        d="M22 16a6 6 0 0 1-12 0c0-4.314 6-14 6-14s6 9.686 6 14ZM8 9a3 3 0 1 1-6 0c0-2.157 3-7 3-7s3 4.843 3 7Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Droplets01)
export default ForwardRef
