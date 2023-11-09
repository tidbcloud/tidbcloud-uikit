import * as React from 'react'
import { forwardRef } from 'react'
const Signal02 = (props, ref) => {
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
        d="M16.243 5.757a6 6 0 0 1 0 8.486m-8.486 0a6 6 0 0 1 0-8.486M4.93 17.071c-3.906-3.905-3.906-10.237 0-14.142m14.142 0c3.905 3.905 3.905 10.237 0 14.142M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v9"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Signal02)
export default ForwardRef
