import * as React from 'react'
import { forwardRef } from 'react'
const UploadCloud01 = (props, ref) => {
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
      viewBox="0 0 20 18"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.333 12.535a3.75 3.75 0 0 1 1.733-6.852 5.001 5.001 0 0 1 9.867 0 3.75 3.75 0 0 1 1.734 6.852m-10-.202L10 9m0 0 3.333 3.333M10 9v7.5"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(UploadCloud01)
export default ForwardRef
