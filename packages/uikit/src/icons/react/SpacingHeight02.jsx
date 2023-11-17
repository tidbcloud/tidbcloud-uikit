import * as React from 'react'
import { forwardRef } from 'react'
const SpacingHeight02 = (props, ref) => {
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
        d="M21 3H3m18 18H3m9-3.5v-11m3 0H9m6 11H9"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SpacingHeight02)
export default ForwardRef
