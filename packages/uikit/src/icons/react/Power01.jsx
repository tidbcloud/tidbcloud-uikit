import * as React from 'react'
import { forwardRef } from 'react'
const Power01 = (props, ref) => {
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
        d="M12 2v10m6.36-5.36a9 9 0 1 1-12.73 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Power01)
export default ForwardRef
