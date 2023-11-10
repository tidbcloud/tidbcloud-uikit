import * as React from 'react'
import { forwardRef } from 'react'
const Compass = (props, ref) => {
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
        d="M12 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 0V2m9 12.938A11.971 11.971 0 0 1 12 19a11.971 11.971 0 0 1-9-4.063m7.745-6.275L3 22M13.255 8.662 21 22"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Compass)
export default ForwardRef
