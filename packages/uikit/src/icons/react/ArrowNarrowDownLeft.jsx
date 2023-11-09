import * as React from 'react'
import { forwardRef } from 'react'
const ArrowNarrowDownLeft = (props, ref) => {
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
        d="M18 6 6 18m0 0h8m-8 0v-8"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ArrowNarrowDownLeft)
export default ForwardRef
