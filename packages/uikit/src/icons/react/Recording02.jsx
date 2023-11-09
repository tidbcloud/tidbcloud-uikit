import * as React from 'react'
import { forwardRef } from 'react'
const Recording02 = (props, ref) => {
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
        d="M3 10v4m4.5-3v2M12 6v12m4.5-15v18M21 10v4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Recording02)
export default ForwardRef
