import * as React from 'react'
import { forwardRef } from 'react'
const SwitchHorizontal01 = (props, ref) => {
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
        d="M20 17H4m0 0 4-4m-4 4 4 4M4 7h16m0 0-4-4m4 4-4 4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SwitchHorizontal01)
export default ForwardRef
