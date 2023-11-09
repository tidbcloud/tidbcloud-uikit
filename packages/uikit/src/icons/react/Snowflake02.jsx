import * as React from 'react'
import { forwardRef } from 'react'
const Snowflake02 = (props, ref) => {
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
        d="M12 8v8m0-8V2m0 6L7 3m5 5 5-5m-5 13v6m0-6-5 5m5-5 5 5m-1-9H8m8 0h6m-6 0 5-5m-5 5 5 5M8 12H2m6 0L3 7m5 5-5 5"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Snowflake02)
export default ForwardRef
