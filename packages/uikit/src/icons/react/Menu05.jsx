import * as React from 'react'
import { forwardRef } from 'react'
const Menu05 = (props, ref) => {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8.5h18m-18 7h18" />
    </svg>
  )
}
const ForwardRef = forwardRef(Menu05)
export default ForwardRef
