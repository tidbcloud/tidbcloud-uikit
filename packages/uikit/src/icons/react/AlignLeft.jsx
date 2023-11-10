import * as React from 'react'
import { forwardRef } from 'react'
const AlignLeft = (props, ref) => {
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
        d="M16 10H3m17-4H3m17 8H3m13 4H3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(AlignLeft)
export default ForwardRef
