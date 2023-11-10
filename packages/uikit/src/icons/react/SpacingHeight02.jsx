import * as React from 'react'
import { forwardRef } from 'react'
const SpacingHeight02 = (props, ref) => {
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
        d="M21 3H3m18 18H3m9-3.5v-11m3 0H9m6 11H9"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SpacingHeight02)
export default ForwardRef
