import * as React from 'react'
import { forwardRef } from 'react'
const ArrowNarrowDownRight = (props, ref) => {
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
        d="m6 6 12 12m0 0v-8m0 8h-8"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ArrowNarrowDownRight)
export default ForwardRef
