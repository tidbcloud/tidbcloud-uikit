import * as React from 'react'
import { forwardRef } from 'react'
const ChevronVerticalShrink = (props, ref) => {
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
        strokeWidth="inherit"
        d="m6 3 6 6 6-6M6 21l6-6 6 6"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ChevronVerticalShrink)
export default ForwardRef
