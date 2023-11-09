import * as React from 'react'
import { forwardRef } from 'react'
const ClockPlus = (props, ref) => {
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
        d="M21.92 13.265c.053-.414.08-.837.08-1.265 0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c.435 0 .864-.028 1.285-.082M12 6v6l3.738 1.87M19 22v-6m-3 3h6"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ClockPlus)
export default ForwardRef
