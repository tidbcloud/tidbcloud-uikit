import * as React from 'react'
import { forwardRef } from 'react'
const Cryptocurrency03 = (props, ref) => {
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
        d="m2 2 2 2m18-2-2 2m2 18-2-2M2 22l2-2m-2-4h1.5M8 2v1.5M22 8h-1.5M16 22v-1.5m2-4.5h3.5M16 2v4M2 8h4m2 14v-4m8-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Cryptocurrency03)
export default ForwardRef
